import { useState, useEffect } from "react";
import "./App.css";
import Spiral from "./components/Spiral";

function App() {
  const [spiralColor, setSpiralColor] = useState();
  const [trans, setTrans] = useState(0.5);

  const randomColor = () => {
    const o = Math.round,
      r = Math.random,
      s = 255;
    setSpiralColor(
      "rgba(" +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        trans +
        ")"
    );
  };

  useEffect(() => {
    randomColor();
  }, []);

  return (
    <div className="App">
      <Spiral size={200} spiralColor={spiralColor} />
      <Spiral size={240} spiralColor={spiralColor} />
      <Spiral size={280} spiralColor={spiralColor} />
      <Spiral size={320} spiralColor={spiralColor} />
      <Spiral size={360} spiralColor={spiralColor} />
      <Spiral size={400} spiralColor={spiralColor} />
    </div>
  );
}

export default App;
