import React, { useState } from "react"; 

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [playerName,setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick(){
    setIsEditing((editing) => !editing);
  }
  function handleChange(event){
    setPlayerName(event.target.value);
    if(isEditing){
      onChangeName(symbol, playerName);
    }
   
  }
  return(
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing  ? <input type="text" required value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span> }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing  ? "Save" : "Edit"}</button>
    </li>
  );
}