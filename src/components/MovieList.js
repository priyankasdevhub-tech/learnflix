import React from 'react'

import MovieCard from './MovieCard'

function MovieList({title,moviData}) {
  
  return (
    <div className='overflow-visible overflow-x-auto' >
        <h1 className=' text-2xl font-bold text-white'>{title}</h1>
        <div className="flex flex-row  overflow-y-visible whitespace-nowrap gap-4 py-2 scrollbar-hide  ">
        {moviData?.map((data, index) => (
          <MovieCard key={index} poster_path={data?.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList