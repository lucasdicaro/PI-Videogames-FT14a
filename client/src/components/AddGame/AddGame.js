import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenre } from "../../Redux/Actions/actions";
import './AddGame.css';

function AddGame() {
  const getGenres = useSelector((state) => state.getGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    genres: []
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = function (e) {
    // console.log("Entre");
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleGenreChange = function (e) {
    e.preventDefault();
   let ids = e.target.options;
   console.log(ids);
   if(ids) {   
     setInput({
       ...input,
           genres: function (arr) {
           let aux = [];
           for(let i = 0; i < arr.length; i++) {
               console.log('1er ----->', arr[i], arr[i].selected)
               arr[i].selected && aux.push(arr[i].value)
           };
           console.log('AUX',aux)
           return aux;
       } (ids)
   })} else {
       console.log('ERROR');
   } 
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    let platformArray = platForm.map((el) => {
        return (
            {
                name: el
            }
        ) 
    })
    input.platforms = platformArray;
    dispatch(postGame(input));
   // console.log(input)
    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      genres: []
    });
  };

  const [platForm, setPlatform] = useState([]);

  const handlePlatforms = function (e) {
      e.preventDefault();
      e.target.checked ? setPlatform([...platForm, e.target.value])
      : setPlatform(platForm.filter(el => el !== e.target.value))
  };
console.log(platForm)
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Name:</label>
        <input
          className={errors.Videogame && "danger"}
          type="text"
          name="name"
          onChange={handleInputChange}
          value={input.name}
          required
        />
        {errors.name && <p className="danger">{errors.name}</p>}
        <div>
          <label>Description:</label>
          <input
            className={errors.description && "danger"}
            type="text"
            name="description"
            onChange={handleInputChange}
            value={input.description}
            required
          />
          <div>
            <label>Released:</label>
            <input
              className={errors.released && "danger"}
              type="date"
              name="released"
              onChange={handleInputChange}
              value={input.released}
              required
            />
            <div>
              <label>Rating:</label>
              <input
                className={errors.rating && "danger"}
                type="number"
                name="rating"
                min = "0"
                max = "5"
                onChange={handleInputChange}
                value={input.rating}
                required
              />
              <div className = "platform">Platforms:</div>
              <div>
                <label> PS5</label>
                <input
                  type="checkbox"
                  value="PS5"
                  name="PS5"
                  onChange={(e) => handlePlatforms(e)}
                />
                <label>XBOX</label>
                <input
                  type="checkbox"
                  value="XBOX"
                  name="XBOX"
                  onChange={(e) => handlePlatforms(e)}
                />
                <label>PC</label>
                <input
                  type="checkbox"
                  value="PC"
                  name="PC"
                  onChange={(e) => handlePlatforms(e)}
                />
                <label>GAMEBOY</label>
                <input
                  type="checkbox"
                  value="Gameboy"
                  name="Gameboy"
                  onChange={(e) => handlePlatforms(e)}
                />
                <label>PS4</label>
                <input
                  type="checkbox"
                  value="PS4"
                  name="PS4"
                  onChange={(e) => handlePlatforms(e)}
                />
              </div>

              <label>Genre</label>
              <select multiple 
                className="genre"
                name="genre"
                onChange={handleGenreChange}
                required
              >
                
                {getGenres &&
                  getGenres.map((g) => (
                    <option value={g.id} name="g.name">
                      {g.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <button className = "btn-form" type="submit">Create</button>
    </form>
  );
}

export function validate(input) {
  //Sacar el export porque la uso solo en el post.
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Name must be a text string";
  }
  return errors;
}

export default AddGame;

