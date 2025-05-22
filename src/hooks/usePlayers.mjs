import { useState } from "react";

export function usePlayers() {
    const [ players, setPlayers ] = useState([
      { name: "NOMBRE", symbol: "X" },
      { name: "NOMBRE", symbol: "O" }
    ]);

    const handlePlayerNameChange = (index, name) => {
      //Creo una copia para generar una nueva referencia y cambiar el estado
      const playersCopy = [...players];
      playersCopy[index].name = name;

      setPlayers(playersCopy);
    };

    const handlePlayerTurnToggle = () => {
      const playersCopy = [...players];
     
      const tempName = playersCopy[0].name;
      playersCopy[0].name = playersCopy[1].name;
      playersCopy[1].name = tempName;

      setPlayers(playersCopy);
    };

    const areDisabled = players.some((player) => player.name == "NOMBRE");

    return {
      players,
      handlePlayerNameChange,
      handlePlayerTurnToggle,
      areDisabled,
    };
}