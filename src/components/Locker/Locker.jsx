
import ClickableButton from "../ClickableButton/ClickableButton";
import clickLockerSound from "../../../public/sounds/clickLockerSound.mp3";

import "./Locker.css";

//Casillero que contiene el boton
export default function Locker({ children, onSelectSquare, disabled}) {
    return (
      <li className="locker__row__item">
        <ClickableButton
          className="locker__row__item__btn"
          onClick={onSelectSquare}
          disabled={disabled}
          sound={clickLockerSound}
        >
          {children}
        </ClickableButton>
      </li>
    );
}