import { createContext, useState } from "react";

export const SoundEnabled = createContext();

//Envuelve a los componentes para que compartan el estado
export function SoundEnabledProvider({ children }) {
    const [soundEnabled, setSoundEnabled] = useState(true);

    const value = {
      soundEnabled,
      setSoundEnabled
    }

    return (
      <SoundEnabled.Provider value={value}>{children}</SoundEnabled.Provider>
    );
}