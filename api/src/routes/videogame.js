// POST CREATE VIDEOGAME
require("dotenv").config();
const { Router } = require("express");
const router = Router();
const { Videogame, Genre } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { Op } = require("sequelize");
const { API_KEY } = process.env;

// GET /:ID
// [ ] GET /videogame/{idVideogame}
router.get(`/:id`, async (req, res) => {
  var detalles = []
  const ID = req.params.id;

  if (ID.includes("-")) {
    const vgById = await Videogame.findOne({
      where: {
        id: ID,
      },
    });
    return res.json(vgById);
  } else {
    let resp = await axios.get(
      `https://api.rawg.io/api/games/${ID}?key=${API_KEY}`
    );

    // for (let i = 0; i < resp.data.results.length; i++) {
    // console.log(resp.data.results)
    //if (resp.data/*[i].id == req.params.idVideogames*/) { //uso ==  por que lo paso como string y el id es un integer, compara un string con un integer
    detalles.push({
      id: resp.data.id,
      name: resp.data.name,
      image: resp.data.background_image,
      genres: resp.data.genres, //include genres
      rating: resp.data.rating,
      description: resp.data.description,
      platforms: resp.data.platforms,
      releaseDate: resp.data.released,
    });
    //  }
    //}
    return res.json(detalles);
    //detalles = [];
  }
});

// POST CREATE VIDEOGAME
// [ ] POST /videogame
router.post("/", async function addVideogame(req, res) {
    try {
      const { name, description, released, rating, platforms, genres } = req.body;
    let videogameCreated = await Videogame.create({
      id: uuidv4(),
      name,
      description,
      released,
      rating,
      platforms,
    })
 
    let genresGame = await Genre.findAll({
      where: { name: { [Op.or]: genres } }
    });
    await videogameCreated.addGenre(genresGame);
    return res.json(videogameCreated)
  } catch (error) {
    res.status(500).send('Videogame Not Found')
  }
});

module.exports = router;
