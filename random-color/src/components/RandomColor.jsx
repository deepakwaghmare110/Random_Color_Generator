import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000"); // state to set color
  const [typeOfColor, setTypeOfColor] = useState("hex"); // state to select type whether it is HEX or RGB
  return (
    <div>
      <div>
        <button>Create RGB Color</button>
        <button>Create HEX Color</button>
        <button>Create Random Color</button>
      </div>
    </div>
  );
};

export default RandomColor;
