import { useState, useEffect } from "react";

export function usePlayerEdit(initialName, onNameChange) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    //Sincronizar con el intercambio de nombres
    useEffect(() => {
      console.log("Entre al useEffect");
      setPlayerName(initialName);
    }, [initialName]);

    const handleChangeEditing = () => {
      if(isEditing) onNameChange(playerName);

      //Creo nuevo estado
      setIsEditing((isEditing) => !isEditing);
    };

    const handleChangePlayerName = name => {
      setPlayerName(name);
    };

    return {
      isEditing,
      playerName,
      handleChangeEditing,
      handleChangePlayerName
    };
}