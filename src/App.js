import { useState } from 'react';
import './App.css';
import SearchResult from './components/results/SearchResult';
import SearchBar from './components/searchbar/SearchBar';
import ShoppingCart from './components/shoppingcart/ShoppingCart';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  let doSearch = (search) => {
    setSearchTerm(search);
  }

  let addToCart = (e) => {
    console.log(e);
  }

  return (
  <>
    <h1>The Magic Store</h1>
    <SearchBar onSearch={doSearch} />
    <div className='mainWrapper'>
      <SearchResult search={searchTerm} addToCart={addToCart} />    
      <ShoppingCart  />
    </div>

  </>
  );
}

export default App;
