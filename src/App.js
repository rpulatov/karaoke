import React from "react";

import { text } from "./song";
import { Rive } from "./Rive";

import "./styles.css";

const parsedText = text.split("\n").filter((item) => !!item);

export default function App() {
  const [current, setCurrent] = React.useState(0);

  const [state, setState] = React.useState(1);

  React.useEffect(() => {
    const keydown = (event) => {
      console.log(event.code);
      if (event.code === "ArrowDown") {
        setCurrent((s) => s + 1);
      } else if (event.code === "ArrowUp") {
        setCurrent((s) => (s > 0 ? s - 1 : 0));
      } else if (event.code === "Numpad1") {
        setState(1);
      } else if (event.code === "Numpad2") {
        setState(2);
      } else if (event.code === "Numpad3") {
        setState(3);
      }
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, []);

  return (
    <div className="App">
      <div
        className="frame"
        style={{
          transform: `translate(0px, -${current * 140}px)`,
          opacity: state === 1 ? 1 : 0,
        }}
      >
        {parsedText.map((item, i) => (
          <div key={i} className={current === i ? "current" : ""}>
            {item}
          </div>
        ))}
      </div>
      <div
        className="animation"
        style={{
          transform: `translate(0px, -${current * 100}px)`,
          opacity: state === 2 ? 1 : 0,
        }}
      >
        <Rive src="./animations/stick_man.riv" autoPlay />
      </div>
    </div>
  );
}
