import React from 'react'

import MovieCard from './MovieCard'

function MovieList({title,moviData}) {
  
  return (
    <div className=' m-5' >
        <h1 className='  text-2xl py-4  font-bold text-white'>{title}</h1>
        <div className="flex flex-row overflow-x-auto whitespace-nowrap gap-4 py-2  scrollbar-hide ">
        {moviData?.map((data, index) => (
          <MovieCard key={index} poster_path={data?.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList