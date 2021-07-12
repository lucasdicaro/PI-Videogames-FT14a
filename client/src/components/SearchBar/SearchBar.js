//import './SearchBar.css';

function SearchBar({onChange}) {
  return ( 
    <div className = "searchbar">
        <input
          type="search"
          placeholder="game"
          onChange={(e) => {onChange(e.target.value)}}
        />
    </div>
  );
}

export default SearchBar;
