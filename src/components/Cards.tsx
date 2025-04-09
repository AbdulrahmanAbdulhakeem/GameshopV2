import React from 'react'
import {Link} from 'react-router-dom'

const Cards = ({game}) => {
    return (
      <Link to = {'/details/' + game.id}>
        <div className='transition p-5 text-slate-100 relative'>
        <img
          src={game.background_image}
          className="rounded-xl h-40 w-full"
          alt={game.name}
        />
        <p className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 px-3 py-1 rounded text-sm font-bold">
          {game.name}
        </p>
      </div>

      </Link>
      );
}

export default Cards
