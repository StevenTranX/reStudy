import { getSuggestedQuery } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useDebounce from '../../Hooks/useDebounce';
import LoadingSkeleton from '../loading/LoadingSkeleton';
// https://api.themoviedb.org/3/movie/550?api_key=67649f3aeae7c3a2d82504a13ab67bf3
// https://api.themoviedb.org/3/search/movie?api_key=67649f3aeae7c3a2d82504a13ab67bf3&query=Get+Out
const MovieSearchApp = () => {
  const [movies, setMovies] = useState('');
  const [query, setQuery] = useState('');
  const queryDebounce = useDebounce(query, 500);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=67649f3aeae7c3a2d82504a13ab67bf3&query='${queryDebounce}'`
      );
      if (response.data.results) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }
    fetchData();
  }, [queryDebounce]);
  return (
    <div className='p-10'>
      <div className='w-full max-w-[500px] max-auto'>
        <input
          type='text'
          className='w-full p-5 rounded-lg border border-purple-200 '
          placeholder='Search movie....'
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {!loading && (
        <div className='grid grid-cols-3 gap-10'>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      {movies.length > 0 &&
        movies.map((movie, index) => {
          return (
            !loading && (
              <div key={movie.id} className='grid grid-cols-3 gap-[40px]'>
                <MovieItem data={movie}></MovieItem>
              </div>
            )
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
const MovieItemLoading = () => {
  return (
    <div className='bg-white-12 rounded-2xl shadow-sm'>
      <div className='h-[297px]'>
        <img
          src={``}
          className='h-full w-full object-cover rounded-lg '
          alt=''
        />
        <LoadingSkeleton width='100%' height='100%' radius='5px' />
      </div>
      <div className='text-base font-semibold mb-4'>
        <h3>
          <LoadingSkeleton
            width='100%'
            height='100%'
            radius='5px'
          ></LoadingSkeleton>
        </h3>
        <p className='text-[#999] text-sm'>
          <LoadingSkeleton width='100%' height='100%' radius='5px' />
        </p>
      </div>
    </div>
  );
};

export default MovieSearchApp;
