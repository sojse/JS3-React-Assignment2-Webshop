import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar(props) {

  // getting the searchstring by using a state variable
  const [search, setSearch] = useState('');
  const searchBar = useRef();
  const navigate = useNavigate();

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
      
      //navigates back to the start page, if the user is in the detailview for a product this allows the user
      //to make a new search in the detail view
      navigate('/');
      props.onSearch(search);
    }
  }

  return (
    <div className='searchBarContainer'>
        <form className='searchForm'>
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