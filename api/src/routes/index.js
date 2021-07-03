require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const {Genres} = require('../db')
const axios = require ('axios')

const videogame = require('./videogame');
const videogames = require('./videogames');
const genres = require('./genres');

//GUARDAR TODOS LOS GENEROS EN LA BASE DE DATOS

const genresx = async function(){
    try{
        var resp= await axios.get('https://api.rawg.io/api/games');
        for(let gen of resp.data){
            if(gen.genres){
               let gens = gen.genres.split(', ' || ','); 
               for(let g of gens){
                   await Genres.findOrCreate({where:{name:g}})
               };
            }
        };
    }
    catch(error){
        console.log(error);
    }
    }
    genresx();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)

//router.use('/videogame', videogame)

//router.use('/videogames', videogames)

router.use('/genres', genres)



module.exports = router;

