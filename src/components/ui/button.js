export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ background: "#007bff", color: "#fff", padding: 10, border: "none", borderRadius: 5 }}>
      {children}
    </button>
  );
}
