import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Game } from "../context/DataContext";
import Cards from "../components/Cards";

const Search = () => {
  const { name } = useParams();
  const navigate = useNavigate()
  const [searchedGame, setSearchedGame] = useState<Game[]>();

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=3da8f62e253a418ea11e3ea8778b23de&search=${name}`
      );

      if(!data.results.length) {
        navigate('*')
      }

      setSearchedGame(data.results)

    };

    fetchDetails();
    console.log(name);
  }, [name]);

  return (
  <div>
    <div className="grid grid-cols-4 bg-slate-900">
      {searchedGame && searchedGame.map((game) => <Cards key={game.id} game={game} />)}
    </div>
  </div>
  )
};

export default Search;
