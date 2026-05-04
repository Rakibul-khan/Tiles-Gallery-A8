export const getTiles = async () => {
  const res = await fetch("http://localhost:5000/tiles");
  return res.json();
};
