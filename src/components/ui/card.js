export function Card({ children }) {
  return <div style={{ backgroundColor: "#333", padding: 20, borderRadius: 10 }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
