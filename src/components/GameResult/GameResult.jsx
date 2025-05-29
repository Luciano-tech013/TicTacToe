import { useEffect } from "react";
import { useEffectSound } from "../../hooks/useEffectSound.mjs";
import ClickableButton from "../ClickableButton/ClickableButton";
import winnerSound from "../../../public/sounds/winnerSound.mp3";
import clickPlayerButton from "../../../public/sounds/clickPlayerButtonSound.mp3";
import confetti from "canvas-confetti";

import "./GameResult.css";
import NavigateButton from "../NavigateButton/NavigateButton";

export default function GameResult({ message, winner, onRestartGame }) {
  const { playSound, soundEnabled } = useEffectSound(winnerSound);

  useEffect(() => {
    if(soundEnabled)
      playSound();
  }, [soundEnabled])

  useEffect(() => {
    if(winner) {
      // dispara el confetti una vez al montar GameResult
      confetti({
        particleCount: 200,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  }, [winner]);

  return (
    <div className="gameresult__container">
      <p>{message}</p>
      <ClickableButton
        className="gameresult__container__btn__rematch"
        onClick={onRestartGame}
        disabled={false}
        sound={clickPlayerButton}
      >
        Reiniciar Juego
      </ClickableButton>
      <NavigateButton
        className="gameresult__container__btn__finish"
        disbaled={false}
        sound={clickPlayerButton}
        route="/"
      >
        Volver al Menú
      </NavigateButton>
    </div>
  );
}
