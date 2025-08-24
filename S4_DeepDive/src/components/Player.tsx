import { useState } from "react";

export const Player = ({
  name,
  symbol,
  isActive,
  onChangeName,
}: {
  name: string;
  symbol: string;
  isActive: boolean | undefined;
  onChangeName?: (symbol: string, newName: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing && onChangeName) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event????", event.target.value);
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
};
