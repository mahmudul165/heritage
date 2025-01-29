const primary = {
  backgroundColor: "#e49e48",
  borderRadius: "5px",
  padding: "10px",
  color: "#fff",
};
const secondary = {
  backgroundColor: "#59330e",
  borderRadius: "5px",
  padding: "10px",
  color: "#fff",
};
function IconWithBackground({ type, children }) {
  return <div style={type === "primary" ? primary : secondary}>{children}</div>;
}

export default IconWithBackground;
