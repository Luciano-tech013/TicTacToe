import { useState } from "react";
import Locker from '../Locker/Locker.jsx';
import "./GameBoard.css";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    function handleSelectSquare(row, column) {
        setGameBoard(prevGameBoard => {
            //Aplanar la matriz para crear una copia del estado 
            const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

            //Asigno si ese casillero está vacío
            if(updateGameBoard[row][column] == null) {
                //Creo un nuevo estado
                updateGameBoard[row][column] = activePlayerSymbol;
                onSelectSquare();
            }

            return updateGameBoard;
        })
    }

    return (
        <ol className="gameboard_container">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex} className="gameboard_row">
                    <ol className="locker_row">
                        {row.map((playerSymbol, columnIndex) =>  
                            <Locker key={columnIndex} handleSelectSquare={() => {handleSelectSquare(rowIndex, columnIndex)}}>{playerSymbol}</Locker>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}