const { Router } = require("express");

const axios = require("axios");

const { Videogame, Genres, genres_videogames } = require("../db");

const { Op } = require("sequelize");

const Genre = require("../models/Genre");
const { API_KEY } = process.env;

const router = Router();

// GET /:ID
// [ ] GET /videogame/{idVideogame}

var detalles = [];

router.get(`/:idVideogames`, async (req, res) => {
  let resp = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  for (let i = 0; i < resp.data.results.length; i++) {
    // console.log(resp.data.results)
    if (resp.data.results[i].id == req.params.idVideogames) {
      detalles.push({
        id: resp.data.results[i].id,
        name: resp.data.results[i].name,
        image: resp.data.results[i].background_image,
        genres: resp.data.results[i].genres,
        rating: resp.data.results[i].rating,
        platforms: resp.data.results[i].platforms,
        releaseDate: resp.data.results[i].released,
      });
    }
  }
  res.json(detalles);
  detalles = [];
});

//  primeros 15 videojuegos que contengan palabra ingresada como query parameter
router.get("/", async (req, res) => {
  try {
    let videogames = [];
        var {name} = req.query
        videogames=[]
        if(name){
            var resp= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
           for(var i = 0; i<15; i++){
               if(resp.data.results[i]){
                videogames.push(resp.data.results[i]);
               }
           }
            res.send(videogames)
        }else{
            
    var resp = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
     var respLimited = resp.data.results.slice(0, 15)
    videogames.push(respLimited)
   
    
    // var next = resp.data.next
    //console.log(next)
    
    const resp2 = await axios.get(resp.data.next)
    var respLimited2 = resp2.data.results.slice(0, 15)
    for(let dataNext of respLimited2){
        //console.log('------------------------')
        //console.log(dataNext)
        //console.log('------------------------')
        videogames.push(dataNext)
    }
    const resp3 = await axios.get(resp.data.next)
    var respLimited3 = resp3.data.results.slice(0, 15)
    for(let dataNext1 of respLimited3){
        //console.log('------------------------')
        //console.log(dataNext)
        //console.log('------------------------')
        videogames.push(dataNext1)
    }
    const resp4 = await axios.get(resp.data.next)
    var respLimited4 = resp4.data.results.slice(0, 15)
    for(let dataNext4 of respLimited4){
        //console.log('------------------------')
        //console.log(dataNext)
        //console.log('------------------------')
        videogames.push(dataNext4)
    }
    const resp5 = await axios.get(resp.data.next)
    var respLimited5 = resp5.data.results.slice(0, 15)
    for(let dataNext5 of respLimited5){
        //console.log('------------------------')
        //console.log(dataNext)
        //console.log('------------------------')
        videogames.push(dataNext5)
    }
    const resp6 = await axios.get(resp.data.next)
    var respLimited6 = resp6.data.results.slice(0, 15)
    for(let dataNext6 of respLimited6){
        //console.log('------------------------')
        //console.log(dataNext)
        //console.log('------------------------')
        videogames.push(dataNext6)
    }
    const resp7 = await axios.get(resp.data.next)
    var respLimited7 = resp7.data.results.slice(0, 10)
    for(let dataNext7 of respLimited7){
        //console.log('------------------------')
        //console.log(dataNext)
        //console.log('------------------------')
        videogames.push(dataNext7)
    }
    //videogames.flat(Infinity)
    res.send(videogames);
       }
  } catch (error) {
    console.log(error);
  }
});

/*
// GET /:ID ---------------------------------------
router.get('/games/:id', async (req, res) =>{
    const id = req.params.id
    try {
        let game = await Videogames.findByPk(id);
        return res.json(game)
    } catch (error) {
        console.log('error')
    }
})

// GET ALL-----------------------------------------
const data = async () => {
    const arr = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    return arr.data.results
};

//LISTA PRIMEROS 15 VIDEOJUEGOS


//PRIMEROS 15 VIDEOJUEGOS que contengan palabra ingresada como query parameter


router.get('/', async (req, res) =>{
    //const name = req.query.name
    const apiVideogames = await data()
    console.log(apiVideogames)
   // try {
       // let hay = await Videogame.findAll();
       //if(!hay.length) 
        .then (Videogame.bulkCreate(apiVideogames))
    //}
     .catch (error) 
       
    
    if(name) {
        try {
        let videog = await Videogame.findAll({
            where :{
                name:{
                    [Op.like]: '%' + name + '%'
                }
            }
        });
        return res.json(videog)
        } catch (error) {
            console.log('error')
        }
    } else if(req.query.filter){
        try{
            let videog = await Videogame.findAll({
                where:{
                    status: req.query.filter
                },
                limit: 15,
                offset: req.query.page,
                order: [['name', req.query.order]],
                include: { model: Genre }
            });
            return res.json(videog)
        } catch (error){
            console.log(error)
        }
    } else{
        try {
            let videog = await Videogame.findAll({
                limit: 15,
                offset: req.query.page,
                order: [['name', req.query.order]],
                include: { model: Genre }
            });
            return res.json(videog)
        } catch (error){
            console.log(error)
        }
    }
});
*/
module.exports = router;
