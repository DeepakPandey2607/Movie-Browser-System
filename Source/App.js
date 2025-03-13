import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Routes, Route } from 'react-router-dom';  // Notice no <BrowserRouter> here

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=b08710330799c9dbc44a7327e45e2411`)
        .then(response => response.json())
        .then(data => { setSearchResult(data.results) })
        .catch(error => console.error(error));
    }
  }, [searchText]);

  const handleSearch = () => {
    // You can add additional logic for handling search if needed
  };

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResult={searchResult} />} />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
