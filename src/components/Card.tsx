import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({game}) => {
    return (
      <Link to = {'/details/' + game.id}>
        <div className="relative h-36 mb-7 w-full rounded-lg overflow-hidden">
        <img
          src={game.background_image}
          className="w-full object-cover"
          alt={game.name}
        />
        <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded text-sm font-bold">
          {game.name}
        </p>
      </div>
      </Link>
      );
}

export default Card
