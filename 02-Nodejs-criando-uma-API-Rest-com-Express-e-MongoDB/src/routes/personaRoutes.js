import express from "express";
import PersonaController from "../controllers/personaController.js";

const personaRoutes = express.Router();

personaRoutes.get('/rolpersonas', PersonaController.listarPersonagem);
personaRoutes.get('/rolpersonas/:id', PersonaController.personagemPorId);
personaRoutes.post('/rolpersonas', PersonaController.postarPersonagem);
personaRoutes.put('/rolpersonas/:id', PersonaController.personagemAtualizar);
personaRoutes.delete('/rolpersonas/:id', PersonaController.personagemDeletar);

export default personaRoutes;