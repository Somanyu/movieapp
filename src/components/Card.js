import React from "react";
import { FaHeart } from 'react-icons/fa';

const Card = (props) => {
    return (
        <div className="flex justify-center my-1 px-2 w-full md:w-1/2 lg:my-4 lg:px-9 lg:w-1/4">
            <div class="text-left w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img class="rounded-t-lg" src="https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" width="286" alt="" />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="font-karla mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Avengers: Endgame</h5>
                    </a>
                    <p class="font-inter mb-3 font-normal text-gray-700 dark:text-gray-400">Year: 2012</p>
                    <div className='container flex justify-between'>
                        <div>
                            <a href="/" class="font-inter inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                        <div>
                            <button>
                                <FaHeart className="text-red-700 hover:text-red-800 text-2xl mt-1" />
                            </button>
                            {/* <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-inter">Favourites</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
