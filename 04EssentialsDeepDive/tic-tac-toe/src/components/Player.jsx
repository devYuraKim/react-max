import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="input"
        required
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      ></input>
    );
    btnCaption = "save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => setIsEditing((prev) => !prev)}>
          {btnCaption}
        </button>
      </span>
    </li>
  );
}
