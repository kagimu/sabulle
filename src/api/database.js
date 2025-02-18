import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DATABASE_NAME || "ecommerce_db";

// ✅ Step 1: Connect to MySQL (Without a database first)
const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST || "127.0.0.1",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
});

// ✅ Step 2: Ensure the database exists
await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
console.log(`✅ Database '${dbName}' ensured to exist.`);

// ✅ Step 3: Create a connection pool (Now with the database)
const pool = mysql.createPool({
    host: process.env.DATABASE_HOST || "127.0.0.1",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    database: dbName,
    connectionLimit: process.env.DATABASE_CONNECTION_LIMIT || 10,
});

// ✅ Step 4: Function to Initialize Database (Split SQL Statements)
const initializeDatabase = async () => {
    try {
        const connection = await pool.getConnection();

        console.log("🔄 Ensuring the 'products' table exists...");
        const sqlFilePath = path.join(process.cwd(), "database.sql");
        const sql = fs.readFileSync(sqlFilePath, "utf8");

        // Split SQL script into individual statements
        const sqlStatements = sql.split(";").map(stmt => stmt.trim()).filter(stmt => stmt.length);

        // Run each SQL statement
        for (const statement of sqlStatements) {
            await connection.query(statement);
        }
        console.log("✅ Database schema applied.");

        

        const insertStatements = [
            ["Product 1", "Description for product 1", 10.00, 100, "/selection/electronique.webp","bags"],
            ["Product 2", "Description for product 2", 20.00, 20, "/selection/electronique.webp","bags"],
            ["Product 3", "Description for product 3", 30.00, 0, "/selection/electronique.webp","bags"],
            ["Product 4", "Description for product 4", 30.00, 5, "/selection/electronique.webp","bags"],
        ];

        for (const product of insertStatements) {
            const [rows] = await connection.query(
                "SELECT COUNT(*) AS product_count FROM products WHERE name = ?",
                [product[0]] // Check if product already exists
            );

            if (rows[0].product_count === 0) {
                // Insert the product only if it doesn't exist
                await connection.query(
                    "INSERT INTO products (name, description, price, stock, image_url, category) VALUES (?, ?, ?, ?, ?, ?)",
                    product
                );
                console.log(`Inserted: ${product[0]}`);
            } else {
                // Update the product if it already exists
                await connection.query(
                    "UPDATE products SET description = ?, price = ?, stock = ?, image_url = ?, category = ? WHERE name = ?",
                    [product[1], product[2], product[3], product[4], product[5], product[0]]
                );
                console.log(`Updated: ${product[0]}`);
            }
        }

        // SQL query to delete duplicate products
        const query = `
            DELETE p1 FROM products p1
            JOIN products p2 
            ON p1.name = p2.name
            WHERE p1.id > p2.id;
        `;
        
        await connection.query(query);
        connection.release();
        console.log("✅ Duplicate products removed successfully.");
    } catch (err) {
        console.error("❌ Error initializing database:", err.message);
    }
};


const removeDuplicates = async () => {
    try {
        const connection = await pool.getConnection();
        
        // SQL query to delete duplicate products
        const query = `
            DELETE p1 FROM products p1
            JOIN products p2 
            ON p1.name = p2.name
            WHERE p1.id > p2.id;
        `;
        
        await connection.query(query);
        connection.release();
        console.log("✅ Duplicate products removed successfully.");
    } catch (err) {
        console.error("❌ Error removing duplicates:", err.message);
    }
};

// Call this function to remove duplicates
// await removeDuplicates();


// ✅ Step 5: Run the Initialization
await initializeDatabase();

export default pool;
