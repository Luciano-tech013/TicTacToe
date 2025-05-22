import Player from "../Player/Player";

import './ListPlayers.css';

export default function ListPlayers({
  players,
  onChangePlayerName,
  activatePlayer,
  isEditable,
}) {
  const handleChangeName = (index, newName) => {
    onChangePlayerName(index, newName);
  };
  
  const classNameCaption = isEditable
    ? "list__players"
    : "list__players__gamestarted";
  
  return (
    <ul className={classNameCaption}>
      {players.map((player, index) => (
        <Player
          key={player.symbol}
          initialName={player.name}
          symbol={player.symbol}
          isHisTurn={
            player.name === "NOMBRE" || player.symbol === activatePlayer
          }
          isEditable={isEditable}
          onNameChange={(newName) => handleChangeName(index, newName)}
        />
      ))}
    </ul>
  );
}