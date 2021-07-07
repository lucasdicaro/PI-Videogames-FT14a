const axios = require('axios');
const { APIKEY } = process.env;

async function getOneHundredGames() {
    //Me traigo los 100 juegos de la api.
   const callApiOne = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`);
   const callApiTwo = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`);
   const callApiThree = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=20`);
   let apiArr = [];

   callApiOne.data.results.map(el => {
       apiArr.push({
           id: el.id,
           name: el.name,
           image: el.background_image,
           genres: el.genres,
           rating: el.rating,
           platforms: el.parent_platforms, 
           releaseDate: el.released
       })
   });
 
   callApiTwo.data.results.map(el => {
    apiArr.push({
        id: el.id,
        name: el.name,
        image: el.background_image,
        genres: el.genres,
        rating: el.rating,
        platforms: el.parent_platforms, 
        releaseDate: el.released
    })
});

   callApiThree.data.results.map(el => {
     apiArr.push({
        id: el.id,
        name: el.name,
        image: el.background_image,
        genres: el.genres,
        rating: el.rating,
        platforms: el.parent_platforms, 
        releaseDate: el.released
    })
});

 return apiArr;

}


module.exports = {
    getOneHundredGames
};