import express from "express";
import livro from "./livroRoutes.js";
import persona from "./personaRoutes.js";


const routes = (app) => {
   
    app.route('/').get((req, res) => res.status(200).send('Hello World with Express'));

    app.use(express.json(), livro, persona);


};


export default routes;
