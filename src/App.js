import { useState } from 'react';
import './App.css';
import SearchResult from './components/results/SearchResult';
import SearchBar from './components/searchbar/SearchBar';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
import ShoppingCartProvider from './provider/ShoppingCartProvider';

function App() {
  // state variable used to update the searchTerm
  const [searchTerm, setSearchTerm] = useState('');

  // sets the search to the state variable that will be sent as props to the search result component
  let doSearch = (search) => {
    setSearchTerm(search);
  }

  return (
  <>
    <h1>The Magic Store</h1>
    <SearchBar onSearch={doSearch} />
    <main className='mainWrapper'>
      <ShoppingCartProvider >
        <SearchResult search={searchTerm}  />
        <ShoppingCart />    
      </ShoppingCartProvider>
    </main>

  </>

  );
}

export default App;

