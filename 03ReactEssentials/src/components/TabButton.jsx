export default function TabButton({ children, onClick, buttonClicked }) {
  return (
    <li>
      <button
        className={buttonClicked ? "active" : ""}
        onClick={() => onClick(children.toLowerCase())}
      >
        {children}
      </button>
    </li>
  );
}
