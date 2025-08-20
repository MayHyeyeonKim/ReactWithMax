import { useState } from "react";

export const Player = ({ name, symbol }: { name: string; symbol: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((editing) => !isEditing);

    if (isEditing) {
      playerName = <input type="text" required value={name} />;
    }
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
};
