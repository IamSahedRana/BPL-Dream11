import { useState, useEffect } from "react";
import Nav from "./Components/nav";
import Banner from "./Components/Banner";
import Players from "./Components/Players/Players";
import Toast, { type ToastMessage } from "./Components/Toast";
import type { Iplayer } from "./Types/PlayerTypes";

function App() {
  // 1. State for fetched players
  const [players, setPlayers] = useState<Iplayer[]>([]);
  
  // 2. Updated Initial Coin balance to 100 Million (100,000,000 ৳)
  const [coins, setCoins] = useState<number>(100000000);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // 3. Fetch data from public/data.json on mount
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  const showToast = (message: string, type: "success" | "error" | "warning") => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleClaimCredit = () => {
    setCoins((prev) => prev + 50000000);
    showToast("50,000,000 ৳ Free Credit Added to Wallet!", "success");
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Toast toast={toast} onClose={() => setToast(null)} />
      <Nav coins={coins} />
      <Banner onClaimCredit={handleClaimCredit} />
      <Players
        players={players}
        coins={coins}
        setCoins={setCoins}
        showToast={showToast}
      />
    </div>
  );
}

export default App;