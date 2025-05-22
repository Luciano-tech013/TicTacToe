import { useCallback, useContext } from "react";
import { SoundEnabled } from "../contexts/soundEnabledContext.jsx";

export function useEffectSound(soundSrc) {
  const { soundEnabled, setSoundEnabled } = useContext(SoundEnabled);

  const handleEnabledSound = () => {
    setSoundEnabled((soundEnabled) => !soundEnabled);
  };

  const playSound = useCallback(() => {
    const audio = new Audio(soundSrc);
    audio.cloneNode().play();
  }, [soundSrc]);

  return {
    playSound,
    soundEnabled,
    handleEnabledSound,
  };
}
