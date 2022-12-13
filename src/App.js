import Search from './components/Search';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=bdfd4318`
    const r = await axios.get(url)
    const response = r.data
    console.log(response.Search)
    if (response.Search) {
      setMovies(response.Search)
    }

  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )
    setFavourites(newFavouriteList);
  }

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
            <a type="button" href='#favourites' class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-inter">Favourites</a>
          </div>
        </div>
      </div>

      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap justify-around -mx-1 lg:-mx-4'>
          <Card
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
        </div>
      </div>

      <h1 id='favourites' class=" mt-8 mb-4 font-karla text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><mark class="px-2 text-white bg-yellow-400 rounded dark:bg-yellow-400">OMDb</mark> favourite movie</h1>

      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap justify-around -mx-1 lg:-mx-4'>
          <Card
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourite}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
