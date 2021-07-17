const { Router } = require("express");
const axios = require("axios");
const { Videogame, Genres, genres_videogames } = require("../db");
const { Op } = require("sequelize");
const { API_KEY } = process.env;
const router = Router();

//  primeros 15 videojuegos que contengan palabra ingresada como query parameter
router.get("/", async (req, res) => {
  try {
    let videogames = [];
    var { name } = req.query;

    if (name) {
      let dbVideogame = await Videogame.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        }
      })
      var resp = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&name=${name}`
      );
      for (var i = 0; i < 15; i++) {
        if (resp.data.results[i]) {
          videogames.push(resp.data.results[i]);
        }
      }
      let vgToSend = dbVideogame.concat(videogames).slice(0, 15);
      res.send(vgToSend);
    } else {
      var resp = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      )

      var respLimited = resp.data.results;

      respLimited.map((g) => {
        var pp = {
          id: g.id,
          name: g.name,
          image: g.background_image,
          genres: g.genres.map((g) => g.name),
          rating: g.rating,
          platforms: g.platforms.map((p) => p.platform.name),
          releaseDate: g.released,
        };
        return videogames.push(pp);
      });

      const resp2 = await axios.get(resp.data.next);
      var respLimited2 = resp2.data.results;

      respLimited2.map((g) => {
        var pp2 = {
          id: g.id,
          name: g.name,
          image: g.background_image,
          genres: g.genres.map((g) => g.name),
          rating: g.rating,
          platforms: g.platforms.map((p) => p.platform.name),
          releaseDate: g.released,
        };
        return videogames.push(pp2);
      });

      const resp3 = await axios.get(resp.data.next);
      var respLimited3 = resp3.data.results;
      respLimited3.map((g) => {
        var pp3 = {
          id: g.id,
          name: g.name,
          image: g.background_image,
          genres: g.genres.map((g) => g.name),
          rating: g.rating,
          platforms: g.platforms.map((p) => p.platform.name),
          releaseDate: g.released,
        };
        return videogames.push(pp3);
      });
      const resp4 = await axios.get(resp.data.next);
      var respLimited4 = resp4.data.results;
      respLimited4.map((g) => {
        var pp4 = {
          id: g.id,
          name: g.name,
          image: g.background_image,
          genres: g.genres.map((g) => g.name),
          rating: g.rating,
          platforms: g.platforms.map((p) => p.platform.name),
          releaseDate: g.released,
        };
        return videogames.push(pp4);
      });
      const resp5 = await axios.get(resp.data.next);
      var respLimited5 = resp5.data.results;
      respLimited5.map((g) => {
        var pp5 = {
          id: g.id,
          name: g.name,
          image: g.background_image,
          genres: g.genres.map((g) => g.name),
          rating: g.rating,
          platforms: g.platforms.map((p) => p.platform.name),
          releaseDate: g.released,
        };
        return videogames.push(pp5);
      });

      let dbVg = await Videogame.findAll();

      const vgConcatenaded = dbVg.concat(videogames);
      res.json(vgConcatenaded);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
