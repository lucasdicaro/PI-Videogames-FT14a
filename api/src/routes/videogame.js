// POST CREATE VIDEOGAME
require("dotenv").config();
const { Router } = require("express");
const router = Router();
const { Videogame, Genre } = require("../db");
//const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { Op } = require("sequelize");
const { API_KEY } = process.env;

// GET /:ID
// [ ] GET /videogame/{idVideogame}
router.get(`/:id`, async (req, res) => {
  var detalles = {}
  const ID = req.params.id;

  if (ID.includes("-")) {
    const vgById = await Videogame.findOne({
      where: {
        id: ID,
      },
      include: [Genre]
    });
    return res.json(vgById);
  } else {
    let resp = await axios.get(
      `https://api.rawg.io/api/games/${ID}?key=${API_KEY}`
    );

    // for (let i = 0; i < resp.data.results.length; i++) {
    // console.log(resp.data.results)
    //if (resp.data/*[i].id == req.params.idVideogames*/) { //uso ==  por que lo paso como string y el id es un integer, compara un string con un integer
    detalles = {
      id: resp.data.id,
      name: resp.data.name,
      background_image: resp.data.background_image,
      genres: resp.data.genres, //include genres
      rating: resp.data.rating,
      description: resp.data.description,
      parent_platforms: resp.data.parent_platforms.map((p) => p.platform.name),
      released: resp.data.released,
    };
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
    const { name, description, released, rating, parent_platforms, genres, background_image, mine } = req.body;
    const videogameCreated = await Videogame.create(
      {
        name:name,
        description:description,
        released:released,
        rating:rating,
        /* background_image:background_image,  */
        parent_platforms:parent_platforms, 
        mine:true,
       /*  genres:genres  */
       background_image: "https://media.revistagq.com/photos/5e7dd2d85bcabb0008f4dc45/master/pass/Doom-Eternal-is-ready-to-blow-your-eyeballs-out-at-1000-FPS-scaled-1280x720.jpg",
      }
      )
    await videogameCreated.setGenres(genres) 
    return res.json(videogameCreated)
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;

/*   let genresGame = await Genre.findAll({
    where: { name: { [Op.or]: genres } }
  });  */
 // await videogameCreated.addGenre(genresGame/* genres,{through:'genres_videogame'} */);
   /* let arrayCreated = []
  arrayCreated.push(videogameCreated)  */