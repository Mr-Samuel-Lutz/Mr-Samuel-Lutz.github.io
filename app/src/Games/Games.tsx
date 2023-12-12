import { useState } from "react";
import { Game } from "../../obj/Game";

function Games() {
  const [gameCount, setGameCount] = useState<number>(0);
  const [gameData] = useState<Game[]>([]);

  const getData = async (url: string) => {
    // gameData.forEach((game) => {
    //   gameData.pop();
    // });
    const response = await fetch(url);
    const data = await response.json();
    setGameCount(data.count);
    data.games.forEach((game: any) => {
      const gameItem: Game = {
        name: game.name,
      };
      gameData.push(gameItem);
    });
  };
  getData(
    "https://api.boardgameatlas.com/api/search?username=ThatSammonkey&pretty=true&client_id=JLBr5npPhV&list_id=RO1nQwLdCE"
  );
  return (
    <>
      {gameCount}
      {gameData.map((game) => {
        return <div className="ml-4 bg-gray-100 border w-1/2">{game.name}</div>;
      })}
    </>
  );
}

export default Games;
