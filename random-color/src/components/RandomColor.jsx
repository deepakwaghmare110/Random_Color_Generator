import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000"); // state to set color
  const [typeOfColor, setTypeOfColor] = useState("hex"); // state to select type whether it is HEX or RGB

  // Hex - total 9 numbers ie: 0 to 9 and Alphabets A-F
  // start from #

  const handleLength = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[handleLength(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRgbColor = () => {};

  return (
    <div>
      <div
        style={{
          margin: 0,
          padding: 0,
          background: color,
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
          position: "fixed",
        }}
      >
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
          }
        >
          Create Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
