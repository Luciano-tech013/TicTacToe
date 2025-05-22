import { usePlayers } from "./hooks/usePlayers.mjs";
import { Routes, Route, Navigate } from 'react-router-dom';
import gameLogo from "../public/gameLogo.png";
import Game from "./components/Game/Game";
import MenuConfig from "./components/MenuConfig/MenuConfig";
import gameStartSound from "../public/sounds/gameStartSound.mp3";


import "./App.css";
import NavigateButton from "./components/NavigateButton/NavigateButton";

//Orquesta páginas
export default function App() {
  const {
    players,
    handlePlayerNameChange,
    handlePlayerTurnToggle,
    areDisabled,
  } = usePlayers();
  
  return (
    <Routes>
      <Route
        path='/'
        element={
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

            <NavigateButton
              className="container__btn__play"
              disabled={areDisabled}
              sound={gameStartSound}
              route='/game'
            >
              Jugar
            </NavigateButton>
          </section>
        }
      />

      <Route
        path='/game'
        element={
          players.every(p => p.name !== "NOMBRE") ?
          (<section className="container">
            <Game
              players={players}
              onChangePlayerName={handlePlayerNameChange}
            />
          </section>) :
          (<Navigate to="/" replace/>)          
        }
      />
    </Routes>
  );
}
