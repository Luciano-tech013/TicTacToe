import { useState } from "react";
import { updateGameBoard } from "../../helpers/updateGameBoard.mjs";
import { getWinnerPlayer } from "../../helpers/getWinnerPlayer.mjs";
import GameBoard from "../GameBoard/GameBoard";
import ListPlayers from "../ListPlayers/ListPlayers";
import GameResult from "../GameResult/GameResult";

const deriveActivePlayer = plays => {
  return plays.length % 2 === 0 ? "X" : "O";
}

export default function Game({ players, onChangePlayerName }) {
  //Estado Jugadas: Para saber DONDE se clickeo y QUIEN lo clickeo
  const [gamePlays, setGamePlays] = useState([]);

  //Para saber QUIEN debe jugar
  const activePlayer = deriveActivePlayer(gamePlays);

  //Para INSERTAR en el tablero
  const gameBoard = updateGameBoard(gamePlays);

  //Estado derivado para saber QUIEN gano o si hubo EMPATE
  const winner = getWinnerPlayer(gameBoard, players);

  //Si me quede sin jugadas disponibles y no hubo ganador, es un empate
  const hasDraw = !winner && gamePlays.length === 9;

  const handleRestartGame = () => {
    setGamePlays([]);
  };

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGamePlays((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);

      //Creo una nueva referencia en memoria para que el estado cambie
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  };

  const messageResultCaption = winner ? `¡Ganó ${winner}!` : "¡Empate!";

  //Si el juego terminó, no hay mas turnos, entonces NO activamos ningun jugador
  const activatePlayerCaption = winner || hasDraw ? null : activePlayer;

  return (
    <main>
      <ListPlayers
        players={players}
        onChangePlayerName={onChangePlayerName}
        activatePlayer={activatePlayerCaption}
        isEditable={false}
      />

      {(winner || hasDraw) && (
        <GameResult
          message={messageResultCaption}
          winner={winner}
          onRestartGame={handleRestartGame}
        />
      )}

      <GameBoard
        onSelectSquare={handleSelectSquare}
        board={gameBoard}
        finished={winner || hasDraw}
      />
    </main>
  );
}
