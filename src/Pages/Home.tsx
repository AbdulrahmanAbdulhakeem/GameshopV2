import React, { useEffect, useState } from "react";
import axios from "axios";
import { Game, useGameContext } from "../context/DataContext";
import Card from "../components/Card";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  const { gameData } = useGameContext();
  const [games, setGames] = useState<Game[]>([]);
  const [mainGame, setMainGame] = useState<Game>();

  useEffect(() => {
    const fetchData = async () => {
      setMainGame(gameData[0]);
      const sliceArr = gameData.slice(1, 4);

      setGames(sliceArr);
      console.log(gameData);
    };

    fetchData();
  }, [gameData]);

  return (
    <>
      <div className="flex pt-5 px-5 gap-8 h-screen text-slate-100 font-bold">
        <Link to={"/details/" + mainGame?.id} className="w-3/4 relative">
            <img
              src={mainGame?.background_image}
              className="h-5/6 w-full rounded-lg object-cover"
            />
            <h1 className="absolute top-3/4 left-2 text-3xl bg-black bg-opacity-50 text-slate-100 px-3 py-1 rounded">
              {mainGame?.name}
            </h1>
        </Link>

        <div className="w-1/4">
          {games && games.map((game) => <Card key={game.id} game={game} />)}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
