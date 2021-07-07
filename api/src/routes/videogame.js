// POST CREATE VIDEOGAME
require('dotenv').config();
const { Router } =require('express');
const router = Router();
const { Videogame, Genre } = require('../db');
const { v4: uuidv4 } = require("uuid");

// POST CREATE VIDEOGAME
// [ ] POST /videogame
router.post('/', async function addVideogame(req,res)  {
    const {  name, description, released, rating, platforms, genres } = req.body
    try { 
        let videogameCreated = await Videogame.create ({
            id: uuidv4(),
            name,
            description,
            released,
            rating,
            platforms
     })
     if(genres){
         genres.forEach(async(element)  => {
          let genresGame = await Genre.findOne({
              where: {name:element} //segun que lo tengo que buscar
          })
          await videogameCreated.addGenre(genresGame)
         });
     }
     res.send(videogameCreated)

     } catch (error){
         console.log(error)
     }
  });
  

  module.exports = router;