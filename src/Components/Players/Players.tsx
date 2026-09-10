
import { use } from "react";
import type { Iplayer } from "../../Types/PlayerTypes";
interface  PlayerProps {
     playersPromise: Promise<Iplayer[]>;
}

const Players = ({playersPromise}: PlayerProps) => {
     const players = use(playersPromise);
     console.log(players, 'players');
     return (
          <div>


          </div>
     );
};

export default Players;