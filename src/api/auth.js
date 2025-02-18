import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "./database.js";

const router = express.Router();
const secretKey = process.env.JWT_SECRET_KEY || "your_secret_key";

// Register a new user
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await pool.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, hashedPassword]
        );
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Login a user
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (rows.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: "1h" });
        const cookieOptions = {  secure: true, sameSite: "Strict" };
        
        res.cookie("token", token, cookieOptions);
        console.log("Set-Cookie:", res.getHeader("Set-Cookie")); // Log the Set-Cookie header
        res.json({ message: "Login successful", user: { username: user.username } });
    } catch (error) {
        console.error("Error logging in user:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Logout a user
router.post("/logout", (req, res) => {
    // Invalidate the token on the client side
    res.clearCookie("token");
    res.json({ message: "User logged out successfully" });
});

export default router;