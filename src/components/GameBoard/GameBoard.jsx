import Locker from '../Locker/Locker.jsx';
import "./GameBoard.css";

export default function GameBoard({ onSelectSquare, board, finished }) {
    return (
        <ol className="gameboard__container">
            {board.map((row, rowIndex) => 
                <li key={rowIndex} className="gameboard__row">
                    <ol className="locker__row">
                        {row.map((playerSymbol, columnIndex) =>  
                            <Locker 
                                key={columnIndex} 
                                onSelectSquare={() => onSelectSquare(rowIndex, columnIndex)}
                                disabled={playerSymbol != null || finished}
                            >
                                {playerSymbol}
                            </Locker>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}