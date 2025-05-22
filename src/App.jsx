import { useState } from "react";
import { usePlayers } from "./hooks/usePlayers.mjs";
import gameLogo from "../public/gameLogo.png";
import Game from "./components/Game/Game";
import MenuConfig from "./components/MenuConfig/MenuConfig";
import ClickableButton from "./components/ClickableButton/ClickableButton";
import gameStartSound from "../public/sounds/gameStartSound.mp3";

import "./App.css";

//Orquesta páginas
export default function App() {
  const [ isGameStarted, setIsGameStarted ] = useState(false);
  const {
    players,
    handlePlayerNameChange,
    handlePlayerTurnToggle,
    areDisabled,
  } = usePlayers();
  
  const handleGameStarted = () => {
    setIsGameStarted((activeGame) => !activeGame);
  }

  if(!isGameStarted) {
    return (
      <section className="container">
        <header className="container__header">
          <h1>
            <img src={gameLogo} alt="Logo del juego" /> Tic-Tac-Toe
          </h1>
        </header>
        <MenuConfig
          players={players}
          onChangePlayerName={handlePlayerNameChange}
          onTogglePlayerTurn={handlePlayerTurnToggle}
        />
        <ClickableButton
          className="container__btn__play"
          onClick={handleGameStarted}
          disabled={areDisabled}
          sound={gameStartSound}
        >
          Jugar
        </ClickableButton>
      </section>
    );
  }
  
  return (
    <section className="container">
      <Game
        players={players}
        onChangePlayerName={handlePlayerNameChange}
        onQuitGame={handleGameStarted}
      />
    </section>
  );
}
