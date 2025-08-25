export const Log = ({ turns }: { turns: Array<{ player: "X" | "O"; square: { row: number; col: number } }> }) => {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} placed on {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
};
