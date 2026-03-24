# blog-api-
API REST pour la gestion d'un blog simple, développée avec Node.js, Express et SQLite.
---

# Technologies utilisées

- **Node.js & Express.js** : création du serveur et gestion des routes
- **SQLite (better-sqlite3)** : base de données légère et rapide
- **Nodemon** : rechargement automatique en développement

---

# Installation et lancement

```bash
git clone https://github.com/NANFACKWAREN9/Blog-api.git
cd Blog-api
npm install
npm run dev
📍 Le serveur démarre sur :

👉 http://localhost:3000

📁 Structure du projet

blog-api/
├── src/
│   ├── routes/
│   │   └── articleRoutes.js
│   ├── controllers/
│   │   └── articleController.js
│   └── models/
│       └── articleModel.js
├── database.js
├── app.js
├── server.js
└── README.md
📡 Endpoints disponibles

Méthode

Endpoint

Description

GET

/api/articles

Lister tous les articles

GET

/api/articles/:id

Lire un article par ID

GET

/api/articles/search?query=

Rechercher un article

POST

/api/articles

Créer un article

PUT

/api/articles/:id

Modifier un article

DELETE

/api/articles/:id

Supprimer un article

🔎 Filtres disponibles

Par catégorie

GET /api/articles?categorie=Tech


Par auteur

GET /api/articles?auteur=Nanfack


Par date

GET /api/articles?date=2026-03-23


🧪 Exemples d’utilisation



➤ Créer un article

curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{"titre":"Mon article","contenu":"Contenu","auteur":"Nanfack","date":"2026-03-23","categorie":"Tech","tags":"node,api"}'
➤ Lire tous les articles

curl http://localhost:3000/api/articles
➤ Lire un article par ID

curl http://localhost:3000/api/articles/1
➤ Modifier un article

curl -X PUT http://localhost:3000/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{"titre":"Titre modifié","contenu":"Nouveau contenu","categorie":"Dev","tags":"update"}'
➤ Supprimer un article

curl -X DELETE http://localhost:3000/api/articles/1
➤ Rechercher un article

curl "http://localhost:3000/api/articles/search?query=node"
📊 Codes HTTP utilisés

Code

Signification

200

Succès

201

Création réussie

400

Requête invalide

404

Article non trouvé

500

Erreur serveur

Auteur

CHEUMO KENGNI STEVE BORIS

Matricule : 23V2265

Licence 2 Informatique

UE : INF222

Université de Yaoundé I