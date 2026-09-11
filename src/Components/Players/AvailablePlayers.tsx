import type { Iplayer } from "../../Types/PlayerTypes";
import { FaUser, FaFlag } from "react-icons/fa";

interface AvailablePlayersProps {
  players: Iplayer[];
  selectedPlayers: Iplayer[];
  onSelectPlayer: (player: Iplayer) => void;
}

const AvailablePlayers = ({
  players,
  selectedPlayers,
  onSelectPlayer,
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player) => {
        // Check if current player is already selected
        const isSelected = selectedPlayers.some(
          (p) => p.playerName === player.playerName
        );

        return (
          <div
            key={player.playerName}
            className="card bg-base-100 border border-base-200 p-4 shadow-sm"
          >
            <figure className="w-full aspect-4/3 rounded-xl overflow-hidden bg-gray-200">
              <img
                src={player.playerimg}
                alt={player.playerName}
                className="w-full h-full object-cover object-top"
              />
            </figure>

            <div className="mt-5 space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-800">
                <FaUser className="text-gray-700" />
                {player.playerName}
              </h2>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <FaFlag />
                  <span>{player.origin}</span>
                </div>
                <div className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-md">
                  {player.playerType}
                </div>
              </div>

              <div className="divider my-0 h-1"></div>

              <div className="space-y-1">
                <p className="font-bold text-gray-800">Rating</p>
                <div className="flex justify-between font-semibold text-gray-700 text-sm">
                  <span>{player.battingStyle}</span>
                  <span className="text-gray-400">{player.bowlingStyle}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="font-bold text-gray-800">Price: ৳{player.price}</p>
                <button
                  disabled={isSelected}
                  onClick={() => onSelectPlayer(player)}
                  className={`btn btn-sm rounded-lg px-4 ${
                    isSelected
                      ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                      : "bg-white hover:bg-gray-100 border border-gray-300 text-gray-700"
                  }`}
                >
                  {isSelected ? "Selected" : "Choose Player"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;