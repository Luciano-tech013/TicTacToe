const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//Extraje la lógica para organizacion del código
export function updateGameBoard(gamePlays) {
  //Copia para no modificar el tablero inicial
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  gamePlays.forEach(play => {
    const { square, player } = play;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return gameBoard;
}
