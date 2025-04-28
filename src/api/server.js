import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cron from "node-cron";
import fetch from "node-fetch";
import { VIVA_BASE_URL, VIVA_API_KEY, VIVA_SOURCE_CODE } from "./vivaConfig.js";
import authRoutes from "./auth.js";
import supabase from "./database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5173;

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://ecommerce-site-main2-main.vercel.app"
        : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);

// Get Bearer token from Viva
const getBearerToken = async () => {
  const response = await fetch("https://accounts.vivapayments.com/connect/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.VIVA_CLIENT_ID,
      client_secret: process.env.VIVA_CLIENT_SECRET,
    }),
  });

  if (!response.ok) throw new Error(`Bearer token error: ${response.statusText}`);
  const data = await response.json();
  return data.access_token;
};

// One-time payment
app.post("/api/pay", async (req, res) => {
  const { amount, customerEmail } = req.body;
  try {
    const token = await getBearerToken();
    const response = await fetch(`${VIVA_BASE_URL}/checkout/v2/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
        customerTrns: "Achat produit",
        customer: { email: customerEmail },
        sourceCode: VIVA_SOURCE_CODE,
      }),
    });

    if (!response.ok) throw new Error(`Viva error ${response.status}`);

    const data = await response.json();
    res.json({ paymentUrl: `https://www.vivapayments.com/web/checkout?ref=${data.orderCode}` });
  } catch (error) {
    console.error("Payment error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Subscription
app.post("/api/subscribe", async (req, res) => {
  const { amount, customerEmail } = req.body;
  try {
    const token = await getBearerToken();
    const response = await fetch(`${VIVA_BASE_URL}/checkout/v2/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
        customerTrns: "Abonnement mensuel",
        customer: { email: customerEmail },
        sourceCode: VIVA_SOURCE_CODE,
        installments: 12,
      }),
    });

    if (!response.ok) throw new Error(`Viva API error: ${response.status}`);

    const data = await response.json();

    const { error } = await supabase.from("abonnements").insert([
      {
        email: customerEmail,
        order_code: data.orderCode,
        amount,
        active: true,
      },
    ]);

    if (error) throw error;

    res.json({ paymentUrl: `https://www.vivapayments.com/web/checkout?ref=${data.orderCode}` });
  } catch (error) {
    console.error("Subscription error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Cron for monthly payments
cron.schedule("0 0 1 * *", async () => {
  console.log("🔄 Exécution des paiements récurrents");

  const { data: subscriptions, error } = await supabase
    .from("abonnements")
    .select("order_code")
    .eq("active", true);

  if (error) return console.error("Supabase error:", error.message);

  for (const sub of subscriptions) {
    try {
      await fetch("http://localhost:5173/api/payments/recurring-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderCode: sub.order_code }),
      });
    } catch (err) {
      console.error("Paiement échoué:", err.message);
    }
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
