import type { Iplayer } from "../../Types/PlayerTypes";
import { FiTrash2 } from "react-icons/fi";

interface SelectedPlayersProps {
  selectedPlayers: Iplayer[];
  onRemovePlayer: (playerName: string) => void;
  onAddMore: () => void;
}

const SelectedPlayers = ({
  selectedPlayers,
  onRemovePlayer,
  onAddMore,
}: SelectedPlayersProps) => {
  return (
    <div className="space-y-6">
      {/* Selected Player List */}
      {selectedPlayers.length === 0 ? (
        <div className="text-center py-12 bg-white border border-gray-200 rounded-2xl text-gray-500">
          No players selected yet. Click "Add More Player" to choose.
        </div>
      ) : (
        <div className="space-y-4">
          {selectedPlayers.map((player) => (
            <div
              key={player.playerName}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              {/* Left Info: Image + Details */}
              <div className="flex items-center gap-4">
                <img
                  src={player.playerimg}
                  alt={player.playerName}
                  className="w-16 h-16 rounded-xl object-cover bg-gray-200"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {player.playerName}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium mt-0.5">
                    {player.battingStyle}
                  </p>
                </div>
              </div>

              {/* Delete Icon Button */}
              <button
                onClick={() => onRemovePlayer(player.playerName)}
                className="text-red-400 hover:text-red-600 transition-colors p-2"
                title="Remove Player"
              >
                <FiTrash2 className="text-xl" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add More Player Button with Outline Ring */}
      <div className="border border-gray-800 p-1 rounded-2xl inline-block mt-4">
        <button
          onClick={onAddMore}
          className="bg-[#E7FE29] text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-colors"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;