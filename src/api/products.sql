-- Étape 1 : Supprimer la table existante si elle existe
DROP TABLE IF EXISTS products;

-- Étape 2 : Créer une nouvelle table simplifiée pour l'abonnement
CREATE TABLE products (
   id               INTEGER  NOT NULL PRIMARY KEY,
   title            VARCHAR(255) NOT NULL,
   description      VARCHAR(255) NOT NULL,
   price            NUMERIC(5,2) NOT NULL,
   subscription_type VARCHAR(50) NOT NULL
);

-- Étape 3 : Insérer un enregistrement unique représentant l'abonnement
INSERT INTO products (id, title, description, price, subscription_type)
VALUES
(1, 'Abonnement Mensuel', 'Abonnement unique offrant un accès à tous les services', 6.00, 'Mensuel'),
(2, 'Abonnement Trimestriel', 'Abonnement offrant un accès à tous les services pour trois mois', 15.00, 'Trimestriel'),
(3, 'Abonnement Semestriel', 'Abonnement offrant un accès à tous les services pour six mois', 27.00, 'Semestriel'),
(4, 'Abonnement Annuel', 'Abonnement offrant un accès à tous les services pour un an', 50.00, 'Annuel'),
(5, 'Abonnement Premium', 'Abonnement premium avec des avantages supplémentaires', 100.00, 'Annuel'),
(6, 'Abonnement Étudiant', 'Abonnement à tarif réduit pour les étudiants', 30.00, 'Annuel');
