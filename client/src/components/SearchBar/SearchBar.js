const SearchBar = (props) => {
  const handleInputChange = (e) => {
      //console.log(e.target.value + 'SearchBar')
      e.preventDefault()
      props.setName(e.target.value) 
  }
  
  const onClickHandler = (e) => {
      e.preventDefault() 
      props.setSearch(true) //cuando cliqueo en search me lo cambia a true 
  }

  return (
      <form >
      <label >Search Videogames</label>
      <input
          type="text"            
          placeholder="Search Videogame"             
          onChange={(e) => {handleInputChange(e)}}  
          />
      <button onClick={(e) => {onClickHandler(e)}} type="submit">Search</button>
  </form>
)
};

export default SearchBar; 