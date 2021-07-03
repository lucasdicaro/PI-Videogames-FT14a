const { Router } = require ('express')

const { Videogame, Genres, genres_videogames } =  require ('../db')

const router = Router();



//LISTA PRIMEROS 15 VIDEOJUEGOS


//PRIMEROS 15 VIDEOJUEGOS que contengan palabra ingresada como query parameter

// GET /videogame/{idVideogame}:
//Obtener el detalle de un VIDEOJUEGO en particular

router.get('/games/:id', async (req, res) =>{
    const id = req.params.id
    try {
        let game = await Videogames.findByPk(id);
        return res.json(game)
    } catch (error) {
        console.log('error')
    }
})

// ME TRAIGO LA DATA DE LA API 

const data = async () => {
    const arr = await axios.get('https://api.rawg.io/api/games');
    return arr.data.results
};



