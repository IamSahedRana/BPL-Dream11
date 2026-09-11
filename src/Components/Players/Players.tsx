import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import { useState } from "react";
import type { Iplayer } from "../../Types/PlayerTypes"; // Match exact file path

interface PlayerProps {
  players: Iplayer[];
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
  showToast: (message: string, type: "success" | "error" | "warning") => void;
}

const Players = ({ players, coins, setCoins, showToast }: PlayerProps) => {
  const [activeTab, setActiveTab] = useState<"available" | "selected">("available");
  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

  const handleSelectPlayer = (player: Iplayer) => {
    const isAlreadySelected = selectedPlayers.some(
      (p) => p.playerName === player.playerName
    );

    if (isAlreadySelected) {
      showToast(`${player.playerName} is already in your team!`, "warning");
      return;
    }

    if (selectedPlayers.length >= 6) {
      showToast("Squad full! You can only select up to 6 players.", "error");
      return;
    }

    if (coins < player.price) {
      showToast("Not enough coins! Claim free credit from the banner.", "error");
      return;
    }

    setCoins((prev) => prev - player.price);
    setSelectedPlayers((prev) => [...prev, player]);
    showToast(`Congratulations! ${player.playerName} purchased successfully.`, "success");
  };

  const handleRemovePlayer = (playerName: string) => {
    const playerToRemove = selectedPlayers.find((p) => p.playerName === playerName);
    if (playerToRemove) {
      setCoins((prev) => prev + playerToRemove.price);
      showToast(`${playerToRemove.playerName} removed & ৳${playerToRemove.price.toLocaleString()} refunded.`, "warning");
    }
    setSelectedPlayers((prev) => prev.filter((p) => p.playerName !== playerName));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl text-gray-800">
          {activeTab === "available"
            ? "Available Players"
            : `Selected Player (${selectedPlayers.length}/6)`}
        </h2>

        <div className="flex items-center rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-6 py-2.5 font-bold transition-colors focus:outline-none ${
              activeTab === "available"
                ? "bg-[#E7FE29] text-gray-900"
                : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab("selected")}
            className={`px-6 py-2.5 font-bold transition-colors focus:outline-none ${
              activeTab === "selected"
                ? "bg-[#E7FE29] text-gray-900"
                : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {activeTab === "available" ? (
        <AvailablePlayers
          players={players}
          selectedPlayers={selectedPlayers}
          onSelectPlayer={handleSelectPlayer}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          onRemovePlayer={handleRemovePlayer}
          onAddMore={() => setActiveTab("available")}
        />
      )}
    </div>
  );
};

export default Players;