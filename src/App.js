import Search from './components/Search';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=bdfd4318`
    const r = await axios.get(url)
    const response = r.data
    console.log(response.Search)
    if (response.Search) {
      setMovies(response.Search)
    }

  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Header />

      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div class="flex flex-wrap justify-center items-center w-auto">
          <div class="w-1/2 h-32 flex-grow-0">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div class="w-72 h-32 mt-3">
            <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-inter">Favourites</button>
          </div>
        </div>
      </div>

      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap justify-around -mx-1 lg:-mx-4'>
          <Card movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
