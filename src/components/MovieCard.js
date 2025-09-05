import React from 'react'
import { IMG_URL } from '../utils/constants'

function MovieCard({poster_path}) {

  return (
    <div className='flex' >
  
  
      <img className="w-40 h-60 object-cover rounded-md flex-shrink-0" src={"https://image.tmdb.org/t/p/w500/"+ poster_path} alt="Movie Card" />

 
    </div>
  )
}

export default MovieCard