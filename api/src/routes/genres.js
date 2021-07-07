require('dotenv').config();
const {Router} = require('express');
const axios = require('axios');
const {API_KEY} = process.env;
const {Genre} = require('../db');

const router = Router();

// GUARDO MIS GENEROS EN LA BASE DE DATOS
// [ ] GET /genres:

router.get('/', async function(req, res) {
    try {
        const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        apiGenres.data.results.forEach(p => {
            Genre.findOrCreate(
                {where: 
                    {name: p.name, id:p.id}
                }
            )
        })
        const dbGenres = await Genre.findAll()
        res.json(dbGenres)
        
    } catch (error) {
        res.status(404).json({ error: "Genre not found" })
    }
})
 
module.exports = router;