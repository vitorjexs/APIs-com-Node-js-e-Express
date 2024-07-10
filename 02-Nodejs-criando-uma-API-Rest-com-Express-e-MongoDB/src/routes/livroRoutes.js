import express from "express";
import LivroController from "../controllers/livroController.js";

const livroRoutes = express.Router();

livroRoutes.get('/acervojuscosmic', LivroController.listarLivro);
livroRoutes.get('/acervojuscosmic/busca', LivroController.buscarPorTitulo)
livroRoutes.get('/acervojuscosmic/:id', LivroController.livroPorId);
livroRoutes.post('/acervojuscosmic', LivroController.postarLivro);
livroRoutes.put('/acervojuscosmic/:id', LivroController.livroAtualizar);
livroRoutes.delete('/acervojuscosmic/:id', LivroController.livroDeletar);

export default livroRoutes;