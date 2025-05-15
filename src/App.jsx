import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

export default function App() {
    const [ activePlayer, setActivePlayer ] = useState("X");

    function handleChangeActivePlayer() {
        setActivePlayer(currentActiveSymbol => currentActiveSymbol == "X" ? "O" : "X");
    }
    
    return (
        <main>
            <ol>
                <Player initialName="Player 1" symbol="X" isActive={activePlayer == "X"}/>
                <Player initialName="Player 2" symbol="O" isActive={activePlayer == "O"}/>
            </ol>
            <GameBoard onSelectSquare={handleChangeActivePlayer} activePlayerSymbol={activePlayer}/>
        </main>
    );
}