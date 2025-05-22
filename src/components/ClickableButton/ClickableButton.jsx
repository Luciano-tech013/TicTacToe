import { useEffectSound } from "../../hooks/useEffectSound.mjs";

export default function ClickableButton({ className, onClick, disabled, sound, children }) {
    const { playSound, soundEnabled } = useEffectSound(sound);
   
    const handleClick = (e) => {
      if(soundEnabled)
        playSound();
      
      onClick && onClick(e);
    };

    return <button className={className} onClick={handleClick} disabled={disabled}>{children}</button>;
}