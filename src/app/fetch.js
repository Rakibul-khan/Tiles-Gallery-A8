export const getTiles = async () => {
  const res = await fetch("https://json-server-a8.onrender.com/tiles");
  return res.json();
};
