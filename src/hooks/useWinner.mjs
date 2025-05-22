import { WINNING_COMBINATIONS } from "../winning_combinations.mjs";

const deriveWinnerPlayer = (winnerSymbol, players) => {
  return players.find((player) => player.symbol === winnerSymbol).name;
};

//Extraje la lógica para organizacion del código
export function useWinner(gameBoard, players) {
  //Devuelve la combinacion ganadora  o si no devuelve undefined
  const winnerCombination = WINNING_COMBINATIONS.find((combination) => {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    return (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    );
  });

  //Si no hay una combinacion ganadora
  if (!winnerCombination) return null;

  //Si hay combinacion ganadora, obtengo el simbolo ganador
  const { row, col } = winnerCombination[0];
  const winnerSymbol = gameBoard[row][col];

  //Obtengo el jugador ganador a partir del simbolo
  return deriveWinnerPlayer(winnerSymbol, players);
}
