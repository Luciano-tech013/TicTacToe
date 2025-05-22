import { usePlayerEdit } from "../../hooks/usePlayerEdit.mjs";
import { useEffectSound } from "../../hooks/useEffectSound.mjs";
import ClickableButton from "../ClickableButton/ClickableButton";
import clickPlayerButtonSound from "../../../public/sounds/clickPlayerButtonSound.mp3";
import keyDownPlayerSound from "../../../public/sounds/keyDownPlayerSound.mp3";

import "./Player.css";

const INPUT_MAX_LENGTH = 8;

export default function Player({ initialName, symbol, isHisTurn, isEditable, onNameChange }) {
  const { 
    isEditing, 
    playerName, 
    handleChangeEditing, 
    handleChangePlayerName 
  } = usePlayerEdit(initialName, onNameChange);

  const { playSound, soundEnabled } = useEffectSound(keyDownPlayerSound);

  const handleKeyPress = () => {
    if(soundEnabled)
      playSound();
  };

  const classNameCaption = isHisTurn ? "list__players__item__active" : "";

  const elemenToShowCaption = isEditing ? (
    <input
      className="list__players__item__input"
      value={playerName}
      onChange={(e) => handleChangePlayerName(e.target.value)}
      onKeyDown={handleKeyPress}
      maxLength={INPUT_MAX_LENGTH}
    />
  ) : (
    <span className="list__players__item__name">{playerName}</span>
  );

  const buttonCaption = isEditing ? "Save" : "Edit";
 
  return (
    <li className={`list__players__item ${classNameCaption}`}>
      <div className="list__players__item__name__container">
        {elemenToShowCaption}
      </div>

      <span className="list__players__item__symbol">{symbol}</span>
      {isEditable && (
        <ClickableButton
          className="list__players__item__btn"
          onClick={handleChangeEditing}
          disabled={false}
          sound={clickPlayerButtonSound}
        >
          {buttonCaption}
        </ClickableButton>
      )}
    </li>
  );
}