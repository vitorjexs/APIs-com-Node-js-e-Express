import express from 'express';
import conectaDB from './config/dbConnect.js';
import livro from './models/Livros.js';

const conexao = await conectaDB();

conexao.on("error", (error) =>{
    console.error('Ocorreu um erro na conexão com a DB', error);
});

conexao.once('open', () => {
console.log("Conexão com DB sucedida!!");
});


const app = express();
app.use(express.json());

// const capitulos = [
//     {
//         id: 1,
//         titulo: 'Justiça Cósmica'
//     },
//     {
//         id: 2,
//         titulo: 'Caleidoscópio'
//     }
// ];

// function encontrarCapitulo (id) {
//     // const capituloId = 
//     return capitulos.findIndex( capitulo => {
//         return capitulo.id === Number(id);
//     });
// };

app.get('/', (req, res) => {
    res.status(200).send('Hello World with Express');

});

app.get('/acervojuscosmic', async (req, res) => {
    const listaJusCosmic = await livro.find({});
    console.log(`Teste do Livro.find({}) --> `);
    console.log(listaJusCosmic);
    res.status(200).json(listaJusCosmic);
});

app.get('/capitulos/:id', (req, res) => {
    const index = encontrarCapitulo(req.params.id);
    res.status(200).json(capitulos[index]);
})

app.post('/capitulos', (req, res) => {
    capitulos.push(req.body);
    res.status(201).send('Capítulo adicionado com sucesso');
});

app.put('/capitulos/:id', (req, res) => {
    const index = encontrarCapitulo(req.params.id);
    capitulos[index].titulo = req.body.titulo;
    res.status(200).json(capitulos);
});

app.delete('/capitulos/:id', (req, res) => {
        const index = encontrarCapitulo(req.params.id);
        capitulos.splice(index, 1);
        res.status(200).send(`Capítulo "${index + 1}" deletado`);
    })

export default app;


