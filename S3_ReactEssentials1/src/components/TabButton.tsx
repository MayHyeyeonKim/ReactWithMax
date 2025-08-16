interface CoreConceptProps {
  children: React.ReactNode;
  onSelect: () => void;
  isSelected?: boolean;
}

export default function TabButton({
  children,
  onSelect,
  isSelected,
}: CoreConceptProps) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
