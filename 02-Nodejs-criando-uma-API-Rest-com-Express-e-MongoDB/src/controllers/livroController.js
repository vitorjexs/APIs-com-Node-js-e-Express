import livro from "../models/Livros.js";
import { persona } from "../models/Personagens.js";

class LivroController {

    static async listarLivro(req, res) {
        try {
            const listaJusCosmic = await livro.find({});
            console.log(`Teste do Livro.find({}) --> `);
            console.log(listaJusCosmic);
            res.status(200).json(listaJusCosmic);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na listagem de livros!!` })
        }
    };

    static async livroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroId = await livro.findById(id);
            console.log(`Teste do Livro.find({}) --> `);
            console.log(livroId);
            res.status(200).json(livroId);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao encontrar o livro` })
        }
    };

    static async postarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const personaEncontrado = await persona.findById(novoLivro.personagem);
            console.log("Personagem encontrado --->>>>", personaEncontrado);
            const livroCompleto = {
                ...novoLivro,
                personagem: {
                    ...personaEncontrado._doc
                }
            };
            const livroCompletoCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "criado com sucesso", livro: livroCompletoCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }
    // static async postarLivro(req, res) {
    //     const novoLivro = req.body;
    //     // capitulos.push(req.body);
    //     try {
    //         const incluirPersonagemId = await persona.findById(novoLivro.persona)

    //         if(!incluirPersonagemId){
    //             const livroCriado = await livro.create(novoLivro)
    //             console.error("Personagem não encontrado!")
    //             res.status(201).json({ message: "Livro incluído com sucesso", livro: livroCriado });

    //         } else {
    //         const livroCompleto = {
    //             ...novoLivro, 

    //             personagem: {
    //                 ...incluirPersonagemId._doc
    //             }

    //         }
    //         const livroCriado = await livro.create(livroCompleto)
    //         res.status(201).json({ message: "Livro incluído com sucesso", livro: livroCriado });
    //     };

    //     } catch (error) {
    //         res.status(500).json({ message: `${error.message} - falha no cadastramento` })
    //     }
    // };

    static async livroAtualizar(req, res) {

        // achar id do personagem
        // adicionar o id ao body
        //


        try {
            const id = req.params.id;

            await livro.findByIdAndUpdate(id, req.body);

            res.status(200).json({ mensage: "livro atualizado!!" });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar` })
        }
    };

    //668eccb54d598befed23e7c4

    static async livroDeletar(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);

            res.status(200).json({ menssage: "livro deletado!!" });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar` })
        }
    };

    static async buscarPorTitulo(req,res){
        const tituloString = req.query.titulo;

        try {
            const tituloPesquisado = await livro.find({ titulo: tituloString });
            res.status(200).json(tituloPesquisado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na busca` })

        }
    }



};

export default LivroController;
