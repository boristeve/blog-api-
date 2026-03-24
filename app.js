const express = require('express');
const app = express();

const db = require('./database');

app.use(express.json());

// Créer un article
app.post('/api/articles', (req, res) => {
    const { titre, contenu, auteur, categorie, tags } = req.body;

    if (!titre || !auteur) {
        return res.status(400).json({ message: "Titre et auteur obligatoires" });
    }

    const article = db.createArticle({ titre, contenu, auteur, categorie, tags });
    res.status(201).json(article);
});

// Lire tous les articles
app.get('/api/articles', (req, res) => {
    res.json(db.getAllArticles());
});

// Lire un article
app.get('/api/articles/:id', (req, res) => {
    const article = db.getArticleById(req.params.id);

    if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
    }

    res.json(article);
});

// Modifier
app.put('/api/articles/:id', (req, res) => {
    const updated = db.updateArticle(req.params.id, req.body);

    if (!updated) {
        return res.status(404).json({ message: "Article non trouvé" });
    }

    res.json(updated);
});

// Supprimer
app.delete('/api/articles/:id', (req, res) => {
    const deleted = db.deleteArticle(req.params.id);

    if (!deleted) {
        return res.status(404).json({ message: "Article non trouvé" });
    }

    res.json({ message: "Article supprimé" });
});

// Recherche
app.get('/api/articles/search', (req, res) => {
    const query = req.query.query;
    const result = db.searchArticles(query);

    res.json(result);
});

module.exports = app;