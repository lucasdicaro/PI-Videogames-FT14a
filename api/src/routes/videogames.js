const { Router } = require("express");

const axios = require("axios");

const { Videogame, Genres, genres_videogames } = require("../db");

const { Op } = require("sequelize");

const Genre = require("../models/Genre");
const { API_KEY } = process.env;

const router = Router();

// GET /:ID
// [ ] GET /videogame/{idVideogame}


router.get(`/:id`, async (req, res) => { 
    var detalles = [];
    const ID= req.params.id
   
    //detalles.push(await Videogame.findAll({where:{id:{ID}}} ))
    let resp = await axios.get(`https://api.rawg.io/api/games/${ID}?key=${API_KEY}`); 
 // for (let i = 0; i < resp.data.results.length; i++) {
    // console.log(resp.data.results)
    if (resp.data/*[i].id == req.params.idVideogames*/) { //uso ==  por que lo paso como string y el id es un integer, compara un string con un integer
      detalles.push({
        id: resp.data.id,
        name: resp.data.name,
        image: resp.data.background_image,
        genres: resp.data.genres, //include genres
        rating: resp.data.rating,
        platforms: resp.data.platforms,
        releaseDate: resp.data.released,
      });
    }
  //}
  res.json(detalles);
  //detalles = [];
});

//  primeros 15 videojuegos que contengan palabra ingresada como query parameter
router.get("/", async (req, res) => {
    try {
        let videogames = [];
        var {name} = req.query
        videogames=[]
        if(name){
            videogames.push(await Videogame.findAll({name:{name}} )) // CHEQUEAR
            var resp= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
           for(var i = 0; i<15; i++){
               if(resp.data.results[i]){
                videogames.push(resp.data.results[i]);
               }
           }
            res.send(videogames)
        }else{
            videogames.push(await Videogame.findAll())
    var resp = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
   // console.log('-----------------------------------', resp)
     var respLimited = resp.data.results//.slice(0, 15)
     //console.log(respLimited)
     respLimited.map((g) => {
        var pp = {
            id: g.id,
            name: g.name,
            image: g.background_image,
            genres: g.genres.map((g)=> (g.name)),  // DEBO HACER LO MISMO QUE EN PLATFORMS 
            rating: g.rating,
            platforms: g.platforms.map((p)=> (p.platform.name)),
            releaseDate: g.released,
        }
         return videogames.push(pp)
     })
    // var next = resp.data.next
    //console.log(next)
    
    const resp2 = await axios.get(resp.data.next)
    var respLimited2 = resp2.data.results//.slice(0, 15)
    
    respLimited2.map((g) => {
        var pp2 = {
            id: g.id,
            name: g.name,
            image: g.background_image,
            genres: g.genres.map((g)=> (g.name)),  // DEBO HACER LO MISMO QUE EN PLATFORMS 
            rating: g.rating,
            platforms: g.platforms.map((p)=> (p.platform.name)),
            releaseDate: g.released,
            
        }
         return videogames.push(pp2)
     })
    
    const resp3 = await axios.get(resp.data.next)
    var respLimited3 = resp3.data.results//.slice(0, 15)
    respLimited3.map((g) => {
        var pp3 = {
            id: g.id,
            name: g.name,
            image: g.background_image,
            genres: g.genres.map((g)=> (g.name)),  // DEBO HACER LO MISMO QUE EN PLATFORMS 
            rating: g.rating,
            platforms: g.platforms.map((p)=> (p.platform.name)),
            releaseDate: g.released,
            
        }
         return videogames.push(pp3)
     })
    const resp4 = await axios.get(resp.data.next)
    var respLimited4 = resp4.data.results//.slice(0, 15)
    respLimited4.map((g) => {
        var pp4 = {
            id: g.id,
            name: g.name,
            image: g.background_image,
            genres: g.genres.map((g)=> (g.name)),  // DEBO HACER LO MISMO QUE EN PLATFORMS 
            rating: g.rating,
            platforms: g.platforms.map((p)=> (p.platform.name)),
            releaseDate: g.released,
            
        }
         return videogames.push(pp4)
     })
    const resp5 = await axios.get(resp.data.next)
    var respLimited5 = resp5.data.results//.slice(0, 15)
    respLimited5.map((g) => {
        var pp5 = {
            id: g.id,
            name: g.name,
            image: g.background_image,
            genres: g.genres.map((g)=> (g.name)),  // DEBO HACER LO MISMO QUE EN PLATFORMS 
            rating: g.rating,
            platforms: g.platforms.map((p)=> (p.platform.name)),
            releaseDate: g.released,
            
        }
         return videogames.push(pp5)
     })
     /*
    const resp6 = await axios.get(resp.data.next)
    var respLimited6 = resp6.data.results//.slice(0, 15)
    respLimited6.map((g) => {
        var pp6 = {
            id: g.id,
            name: g.name,
            image: g.background_image,
            genres: g.genres.map((g)=> (g.name)),  // DEBO HACER LO MISMO QUE EN PLATFORMS 
            rating: g.rating,
            platforms: g.platforms.map((p)=> (p.platform.name)),
            releaseDate: g.released,
            
        }
         return videogames.push(pp6)
     })
    const resp7 = await axios.get(resp.data.next)
    var respLimited7 = resp7.data.results//.slice(0, 10)
    for(let dataNext7 of respLimited7){
        //console.log('------------------------')
        //console.log(dataNext)
        //console.log('------------------------')
        videogames.push({
            id: respLimited7.id,
            name: respLimited7.name,
            image: respLimited7.background_image,
            genres: respLimited7.genres, 
            rating: respLimited7.rating,
            platforms: respLimited7.platforms,
            releaseDate: respLimited7.released,
        })
    }
    */
    //videogames.flat(Infinity)
    videogames.push(await Videogame.findAll()) 
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
