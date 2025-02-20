import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import path from "path";
import pool from "./database.js";
import authRoutes from "./auth.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
import { VIVA_BASE_URL, VIVA_API_KEY, VIVA_SOURCE_CODE } from "./vivaConfig.js";
// Configure CORS
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
      ? 'https://ecommerce-site-main2-main.vercel.app' // Replace with your actual Vercel domain
      : 'http://localhost:3000',
    credentials: true
  }));


app.use(express.json());

app.use("/api/auth", authRoutes);

// Route pour récupérer le produit
app.get("/api/products", async (req, res) => {
    const category = req.query.category;
    try {
        const [rows] = await pool.query("SELECT * FROM products WHERE category = ?", [category]);
        res.json(rows);
    } catch (error) {
        console.error("❌ Error fetching products:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Route pour récupérer le produit par ID
app.get("/api/products/:id", (req, res) => {
    const productId = parseInt(req.params.id, 10);

    if (product.id === productId) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Produit non trouvé" });
    }
});


// Function to get Bearer token
const getBearerToken = async () => {
    const tokenUrl = "https://accounts.vivapayments.com/connect/token";
    const clientId = "xfd04yaj2nd9hf7r2ep95v3rsnw2djyea1af4ys3cj9o9.apps.vivapayments.com"; // Replace with your client ID
    const clientSecret = "79x5WiXynm2xd667gzRUM1ADNEsx4V"; // Replace with your client secret

    const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to get Bearer token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
};

// Route pour paiement unique
app.post("/api/pay", async (req, res) => {
    const { amount, customerEmail } = req.body;
    console.log("requete payement");

    try {
        const token = await getBearerToken();
        console.log(token);
        const response = await fetch(`${VIVA_BASE_URL}/checkout/v2/orders`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: amount , // Viva Wallet prend les montants en centimes
                customerTrns: "Abonnment Sabulle",
                customer: { email: customerEmail },
                
                sourceCode: "default",
            }),
        });

        if (!response.ok) {
            throw new Error(`Viva Wallet API responded with status ${response.status}`);
        }
        console.log("test")
        const data = await response.json();
        console.log("Viva Wallet API response data:", data);
        // working url https://www.vivapayments.com/web/checkout?ref=${data.orderCode}
        res.json({ paymentUrl: `https://www.vivapayments.com/web/checkout?ref=${data.orderCode}` });
    } catch (error) {
        console.error("Error processing payment:", error.message);
        res.status(500).json({ error: error.message });
    }
});

// Middleware pour servir des fichiers statiques
app.use(express.static("public"));

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
});


