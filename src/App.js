import { useState } from 'react';
import './App.css';
import SearchResult from './components/results/SearchResult';
import SearchBar from './components/searchbar/SearchBar';
import ShoppingCart from './components/shoppingcart/ShoppingCart';

function App() {
  // state variable used to update the searchTerm
  const [searchTerm, setSearchTerm] = useState('');

  // state variable used to update the item the user clicked to add in the cart
  const [purchasedItems, setItem] = useState([]);

  // sets the search to the state variable that will be sent as props to the search result component
  let doSearch = (search) => {
    setSearchTerm(search);
  }

  /**
   * Making a copy of the current array with the items that is in the shopping cart and adding the new item
   */
  let addToCart = (index, item) => {
    let newItem = [...purchasedItems];
    newItem.push(item[index]);
    setItem(newItem);
  }

  let removeItem = (updatedShoppingCart) => {
    console.log(updatedShoppingCart);
    setItem(updatedShoppingCart);
  }

  return (
  <>
    <h1>The Magic Store</h1>
    <SearchBar onSearch={doSearch} />
    <main className='mainWrapper'>
      <SearchResult search={searchTerm} addToCart={addToCart} />    
      <ShoppingCart item={purchasedItems} onRemove={removeItem} />
    </main>
  </>

  );
}

export default App;

