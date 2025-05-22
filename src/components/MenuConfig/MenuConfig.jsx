import { useEffectSound } from "../../hooks/useEffectSound.mjs";
import ClickableButton from "../ClickableButton/ClickableButton";
import ListPlayers from "../ListPlayers/ListPlayers";
import clickToggleButtonSound from "../../../public/sounds/clickToggleButtonSound.mp3";

import "./MenuConfig.css";

export default function MenuConfig({ players, onChangePlayerName, onTogglePlayerTurn }) {
  const { soundEnabled, handleEnabledSound } = useEffectSound(
    clickToggleButtonSound
  );

  const iconCaption = soundEnabled ? (
    <ion-icon name="volume-high-outline"></ion-icon>
  ) : (
    <ion-icon name="volume-mute-outline"></ion-icon>
  );

  return (
    <section>
      <div className="list__players__container">
        <ListPlayers
          players={players}
          onChangePlayerName={onChangePlayerName}
          activatePlayer="all"
          isEditable={true}
        />
      </div>
      <div className="menu__toggle__container">
        <ClickableButton
          className="menu__toggle__btn"
          onClick={onTogglePlayerTurn}
          disabled={false}
          sound={clickToggleButtonSound}
        >
          <ion-icon name="repeat-outline"></ion-icon>
        </ClickableButton>
        <ClickableButton
          className="menu__toggle__btn"
          onClick={handleEnabledSound}
          disabled={false}
          sound={clickToggleButtonSound}
        >
          {iconCaption}
        </ClickableButton>
      </div>
    </section>
  );
}
