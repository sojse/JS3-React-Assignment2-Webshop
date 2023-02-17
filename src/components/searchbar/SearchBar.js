import { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {

  const [search, setSearch] = useState('');

  let onChange = (e) => {
    setSearch(e.target.value);
  }

  let handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      props.onSearch(search);
    }
  }

  return (
    <div>
        <form>
            <i className="bi bi-search"></i>
            <input 
              type="search" 
              name="search" 
              placeholder="Search" 
              value={search} 
              onChange={onChange} 
              onKeyDown={handleKeyDown}
            />
        </form>
    </div>
  );
}

export default SearchBar;