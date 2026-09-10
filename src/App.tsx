import Nav from "./Components/nav";
import Banner from "./Components/Banner";
import Players from "./Components/Players/Players";
import { Suspense } from "react";
import type { Iplayer } from "./Types/PlayerTypes";

const playersFetch = async (): Promise<Iplayer[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

function App() {
  const playersPromise = playersFetch();

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<div>Loading...</div>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;