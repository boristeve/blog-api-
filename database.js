let articles = [];
let currentId = 1;

function createArticle(data) {
    const article = {
        id: currentId++,
        ...data,
        date: new Date()
    };
    articles.push(article);
    return article;
}

function getAllArticles() {
    return articles;
}

function getArticleById(id) {
    return articles.find(a => a.id == id);
}

function updateArticle(id, data) {
    const article = articles.find(a => a.id == id);
    if (!article) return null;

    Object.assign(article, data);
    return article;
}

function deleteArticle(id) {
    const index = articles.findIndex(a => a.id == id);
    if (index === -1) return false;

    articles.splice(index, 1);
    return true;
}

function searchArticles(query) {
    return articles.filter(a =>
        (a.titre && a.titre.includes(query)) ||
        (a.contenu && a.contenu.includes(query))
    );
}

module.exports = {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    searchArticles
};