import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    olhos: { type: String }

});

const persona = mongoose.model("personagem", personagemSchema);

export { persona, personagemSchema }