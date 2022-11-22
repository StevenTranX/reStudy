import axios from 'axios';
import React, { useEffect, useState } from 'react';
// https://api.themoviedb.org/3/movie/550?api_key=67649f3aeae7c3a2d82504a13ab67bf3
// https://api.themoviedb.org/3/search/movie?api_key=67649f3aeae7c3a2d82504a13ab67bf3&query=Get+Out
const MovieSearchApp = () => {
  const [movies, setMovies] = useState('');
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=67649f3aeae7c3a2d82504a13ab67bf3&query=''`
      );
      if (response.data.results) setMovies(response.data.results);
    }
    fetchData();
  }, []);
  return (
    <div className='p-10'>
      <div className='w-full max-w-[500px] max-auto'>
        <input
          type='text'
          className='w-full p-5 rounded-lg border border-purple-200 '
          placeholder='Search movie....'
        />
      </div>
      {movies.length > 0 &&
        movies.map((movie, index) => {
          return (
            <div className='grid grid-cols-3 gap-[40px]'>
              <MovieItem key={movie.id} data={movie}></MovieItem>
            </div>
          );
        })}
    </div>
  );
};
const MovieItem = (props) => {
  const { data } = props;
  return (
    <div className='bg-white-12 rounded-2xl shadow-sm'>
      <div className='h-[297px]'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          className='h-full w-full object-cover rounded-lg '
          alt=''
        />
      </div>
      <div className='text-base font-semibold mb-4'>
        <h3>{data.title}</h3>
        <p className='text-[#999] text-sm'>{data.overview}</p>
      </div>
    </div>
  );
};

export default MovieSearchApp;
