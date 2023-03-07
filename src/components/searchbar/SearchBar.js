import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {

  // getting the searchstring by using a state variable
  const [search, setSearch] = useState('');
  const searchBar = useRef();

  // sets the focus to the search bar when the component renders
  useEffect(() => searchBar.current.focus());

  // getting the data from the controlled input-field
  let onChange = (e) => {
    setSearch(e.target.value);
  }

  // executes search when the user presses the enter key
  let handleKeyDown = (e) => {
    
    if(e.key === 'Enter') {
      e.preventDefault();
  
      // sends the search back to the parent
      props.onSearch(search);
    }
  }

  return (
    <div className="searchBarContainer">
        <form className="searchForm">
            <i className="bi bi-search"></i>
            <input 
              type="search" 
              name="search" 
              placeholder="Search" 
              value={search} 
              ref={searchBar}
              onChange={onChange} 
              onKeyDown={handleKeyDown}
            />
        </form>
    </div>
  );
}

export default SearchBar;