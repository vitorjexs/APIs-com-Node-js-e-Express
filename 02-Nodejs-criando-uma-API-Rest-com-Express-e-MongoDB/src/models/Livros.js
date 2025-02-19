import mongoose, { mongo } from "mongoose";
import { personagemSchema } from "./Personagens.js";

const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    personagem: personagemSchema,
    acesso: {type: String },
    genero: { type: String },
    lancamento: { type: Number }
}, { collection: 'acervojuscosmic'}, { versionKey: false } );



const livro = mongoose.model("JusCosmic", livroSchema);

// livro.save().then(() => console.log('Livro salvo')).catch(err => console.error('Erro ao salvar livro:', err));



export default livro;