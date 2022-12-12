import Card from './components/Card';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState();
  const [apiCall, setApiCall] = useState();
  const [moviesList, setMoviesList] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchString}&apikey=bdfd4318`
    )
    setMoviesList(response.date.Search)
  }

  const onTextChange = (event) => {
    clearTimeout(apiCall)
    setSearchQuery(event.target.value)
    const timeout = setTimeout(() => fetchData(event.target.value), 500)
    setApiCall(timeout)
  }
  return (
    <div className="App">
      <Header />

      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div class="flex flex-wrap justify-center items-center w-auto">
          <div class="w-1/2 h-32 flex-grow-0">
            <form>
              <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={onTextChange} value={searchQuery} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-inter" placeholder="Search movies" required />
              </div>
            </form>
          </div>
          <div class="w-72 h-32 mt-3">
            <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-inter">Favourites</button>
          </div>
        </div>
      </div>

      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap justify-around -mx-1 lg:-mx-4'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
