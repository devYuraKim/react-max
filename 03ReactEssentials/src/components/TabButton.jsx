export default function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={() => onClick(children)}>{children}</button>
    </li>
  );
}
