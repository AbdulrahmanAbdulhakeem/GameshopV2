import React, { useEffect, useState } from "react";
import { useGameContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const { id } = useParams();
  const [gameDetail, setGameDetail] = useState();
  const [seeMore,setSeeMore] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=3da8f62e253a418ea11e3ea8778b23de`
      );
      setGameDetail(data);
    };

    fetchData();
  }, [gameDetail]);

  return (
    <div className="bg-slate-900 ">
      <div className="flex h-screen gap-8 text-slate-100 text-opacity-90 font-bold m-5">
      <div className="w-1/3 relative">
          <img src={gameDetail?.background_image} className="h-3/4 w-full rounded-lg object-cover" />
          <h1 className="absolute top-96 left-2 text-3xl bg-black bg-opacity-50 text-slate-100 px-3 py-1 rounded">{gameDetail?.name}</h1>
        </div>
        <div className="w-2/3 leading-7">
        <div className="bg-slate-600 rounded-xl p-5 h-3/4">
          <h1 className="text-3xl pb-2 ">About the Game</h1>
          {gameDetail && <p className="text-lg text-lg">{seeMore ? gameDetail?.description_raw.slice(0,1200) :gameDetail?.description_raw.slice(0,400)}</p>}
          <button onClick = {() => setSeeMore(!seeMore)}>...</button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
