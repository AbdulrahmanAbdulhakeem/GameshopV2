import React, { useEffect } from "react";
import { useGameContext } from "../context/DataContext";
import Cards from "../components/Cards";

const Store = () => {
  const { gameData } = useGameContext();

  useEffect(() => {
    console.log(gameData);
  }, [gameData]);

  return (
    <div className="grid grid-cols-4 bg-slate-900">
      {gameData && gameData.map((game) => <Cards key={game.id} game={game} />)}
    </div>
  );
};

export default Store;
