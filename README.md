# Site de e-commerce pour le café

Application SSR (Server Side Rendering)

# Technos

- Dotenv
- Ejs
- EmailJS
- Express
- Express-session
- PostrgreSQL pour la BDD

# Objectifs

- Mise en place d'emailJS
- Création d'une et setup de la BDD 
- Utilisation de postgreSQL avec des requêtes SQL (sans ORM) et utilisation d'un dataMapper
- Mise en place d'un système de session (setup mais non exploité)
- Utilisation d'ejs pour utiliser des variables/du code dans le html
- Utilisation de partials
- Mise en place d'un caroussel
- Faire une application responsive
- Utilisation d'aria sur le page catalog.ejs

# Setup

A la racine du projet:

## Installer toutes les dépendances

```bash

pnpm i 

```

ou

```bash

npm i

```

## Définir les variables d'environnement

- Copier le .envExample, le renommer en .env et remplacer les valeurs par celles correspondantes.

## Créer la BDD

- Créer la BDD postgreSQL
- La remplir a l'aide du fichier "./data/db.sql" (se connecter à la BDD, utiliser la commande `\i ./data/db.sql`)

## Démarrer le client

```bash

pnpm dev

```

ou

```bash

npm run dev

```

NB: Pour visualiser le caroussel il faut, dans les devs tools, cliquer sur "Responsive design mode"