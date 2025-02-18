const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Utilisation de la clé secrète Stripe via les variables d'environnement

const app = express();

// Configurer CORS pour autoriser les requêtes du frontend
app.use(cors({
  origin: 'https://backstorm.fr',  // URL de votre frontend en production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type',
}));

app.use(express.json());

// Endpoint pour créer une session de paiement
app.post('/api/create-checkout-session', async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    console.error('Montant non fourni');
    return res.status(400).json({ error: 'Montant non fourni' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Dépôt',
            },
            unit_amount: amount * 100, // Montant en centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://backstorm.fr/mon-compte?success=true', // URL de succès
      cancel_url: 'https://backstorm.fr/mon-compte?canceled=true', // URL d'annulation
    });

    console.log('Session Stripe créée avec ID:', session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error('Erreur lors de la création de la session de paiement:', error.message);
    res.status(500).json({ error: 'Impossible de créer la session de paiement' });
  }
});

module.exports = app;
