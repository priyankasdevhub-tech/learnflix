import React from 'react'
import { IMG_URL } from '../utils/constants'

function MovieCard({ poster_path, title }) {
  return (
    <div className="relative group w-40 h-60 flex-shrink-0 ">
      {/* Base Card */}
      <img
        className="w-40 h-60 object-cover rounded-md"
        src={IMG_URL + poster_path}
        alt="Movie Card"
      />

      {/* Hover Popup */}
      <div
        className="pointer-events-none
             group-hover:pointer-events-auto
             absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-80 bg-black  text-white rounded-lg shadow-2xl
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition-all duration-300 z-[1000] 
                   overflow-visible"
        style={{ minHeight: '340px' }}
      >
        {/* Poster */}
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={IMG_URL + poster_path}
          alt="Movie Preview"
        />

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold">{title}</h3>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200">▶</button>
            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">＋</button>
            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">👍</button>
            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">⌄</button>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="border px-1 py-0.5 rounded">U/A 16+</span>
            <span>HD</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <span>Action</span>
            <span>Thriller</span>
            <span>Drama</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
