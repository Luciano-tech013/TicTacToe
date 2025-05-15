import "./Locker.css";

//Casillero que contiene el boton
export default function Locker({ children, handleSelectSquare }) {
    return (
        <li className="locker_row_item">
            <button onClick={handleSelectSquare}>
                {children}
            </button>
        </li>
    );
}