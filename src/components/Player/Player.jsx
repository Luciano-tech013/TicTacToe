import { useState } from "react";
import './Player.css';

export default function Player({ initialName, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleChangePlayerName(event) {
        //Creo nuevo estado
        setPlayerName(event.target.value);
    }

    function handleEditClick() {
        //Creo nuevo estado
        setIsEditing(isEditing => !isEditing);
    }

    let editPlayerName = <span>{playerName}</span>;

    if(isEditing) {
        editPlayerName = <input type="text" onChange={handleChangePlayerName} required/>
    }

    const buttonCaption = isEditing ? "Save" : "Edit";
    
    return (
        <li className={isActive ? "active" : ""}>
            {editPlayerName}
            <span>{symbol}</span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    );
}