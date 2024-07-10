import {persona} from "../models/Personagens.js";

class PersonaController {

    static async listarPersonagem(req, res) {
        try {
            const listaPersonagens = await persona.find({});
            console.log(`Teste do persona.find({}) --> `);
            console.log(listaPersonagens);
            res.status(200).json(listaPersonagens);
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na listagem de personagens!!` })
        }
    };

    static async personagemPorId(req, res) {
        try {
            const id = req.params.id;
            const personaId = await persona.findById(id);
            // console.log(`Teste do Livro.find({}) --> `);
            console.log(personaId);
            res.status(200).json(personaId);
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao encontrar o personagem` })
        }
    };

    static async postarPersonagem(req, res) {
        // capitulos.push(req.body);
        try {
            const novoPersonagem = await persona.create(req.body);

            res.status(201).json({ message: "Personagem incluído com sucesso", persona: novoPersonagem });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha no cadastramento de personagem` })
        }
    };

    static async personagemAtualizar(req, res) {
        try {
            const id = req.params.id;
            await persona.findByIdAndUpdate(id, req.body);
          
            res.status(200).json({mensage: "Personagem atualizado!!"});
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar o personagem` })
        }
    };

    static async personagemDeletar(req, res) {
        try {
            const id = req.params.id;
            await persona.findByIdAndDelete(id, req.body);
          
            res.status(200).json({mensage: "Personagem deletado!!"});
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar personagem` })
        }
    };

    

};

export default PersonaController;
