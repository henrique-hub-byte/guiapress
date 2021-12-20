//recurso express permiti criar rotas sem usar o app
const express = require("express")
const router = express.Router();

router.get("/articles", (req,res) => {
    res.send("ROTA DE ARTICLES")
});

router.get("/admin/articles/new", (req,res) => {
    res.send("ROTA PARA CRIAR UM NOVO ARTICLES")
})

module.exports = router;