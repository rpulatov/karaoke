import React from "react";

import { text } from "./song";
import { Rive } from "./Rive";

import "./styles.css";

const parsedText = text.split("\n").filter((item) => !!item);

export default function App() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const keydown = (event) => {
      if (event.code === "ArrowDown") {
        setCurrent((s) => s + 1);
      } else if (event.code === "ArrowUp") {
        setCurrent((s) => (s > 0 ? s - 1 : 0));
      }
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, []);

  return (
    <div className="App">
      <div
        className="frame"
        style={{ transform: `translate(0px, -${current * 100}px)` }}
      >
        {parsedText.map((item, i) => (
          <div key={i} className={current === i ? "current" : ""}>
            {item}
          </div>
        ))}
      </div>
      <div className="animation">
        <Rive src="./animations/hlinha.riv" autoPlay />
      </div>
    </div>
  );
}
