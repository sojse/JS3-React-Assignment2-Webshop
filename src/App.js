import { useState } from 'react';
import './App.css';
import SearchResult from './components/results/SearchResult';
import SearchBar from './components/searchbar/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  let doSearch = (search) => {
    setSearchTerm(search);
  }

  return (
  <>
    <h1>The Magic Store</h1>
    <SearchBar onSearch={doSearch} />
    <SearchResult search={searchTerm} />    
  </>
  );
}

export default App;
