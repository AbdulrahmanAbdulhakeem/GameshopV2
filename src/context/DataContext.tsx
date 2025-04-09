import React,{
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from 'axios'


interface Game {
  id: number;
  slug: string;
  name: string;
  rating:number;
  ratings_count: number;
  description_raw: string;
  website: string;
  released: string;
  background_image: string;
  developers: {
    name: string;
  }[];
  publishers: {
    name: string;
  }[];
  parent_platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
  }[];
  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
  }[];
  genres: {
    name: string;
  }[];
  short_screenshots: {
    id: number;
    image: string;
  }[];
}

interface GameContextState {
    gameData:Game[]
}

interface gameProviderProps{
    children:ReactNode
}


export const GameContext = createContext<GameContextState | null>(null);

export const GameProvider :React.FC<gameProviderProps> = ({children}) => {
    const [gameData,setGameData] = useState<Game[]>([])

      useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios.get(
            "https://api.rawg.io/api/games?key=3da8f62e253a418ea11e3ea8778b23de"
          );
          const newGames = await data.results;
          setGameData(newGames)
        }
    
        fetchData();
      }, []);

      return (
        <GameContext.Provider value={{gameData}}>
            {children}
        </GameContext.Provider>
      )
}

export const useGameContext = ():GameContextState => {
    const context = useContext(GameContext)

    if(!context) {
        throw new Error("useGameContext must be used within GameProvider")
    }

    return context
}

export type { Game };

