import "./App.css";
import "./assets/fonts.css";
import { calcTitleOffest } from "./Constants.js";
import React, { useState } from "react";
import { useWindowSize } from "./Utils";
import Game from "./Game";

function App() {
  //const [resetGame, setReset] = useState(false);
  const doc = document.querySelector("body");
  doc.style.backgroundColor = "#2d394d";
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* <Title handleClick={(bool) => setReset(bool)} /> */}
      <Title />
      <Score />
      {/* <Game resetGame={resetGame} setResetGame={(bool) => setReset(bool)} /> */}
      <Game />
    </div>
  );
}

/**
 * Renders title
 * @returns React Component of Title
 */
function Title() {
  const { width, height } = useWindowSize();
  const titleOffsets = calcTitleOffest(width, height);

  return (
    <div
      style={{
        position: "absolute",
        left: titleOffsets.leftRight,
        top: titleOffsets.top,
      }}
    >
      <h1
        style={{
          fontFamily: "Roboto Mono",
          fontWeight: 100,
          fontSize: 0.11 * height,
          color: "#FF7A90",
          lineHeight: 0,
        }}
      >
        2408
      </h1>
      {/* <button onClick={props.handleClick(true)}>New Game</button> */}
    </div>
  );
}

/**
 * renders score and high Score
 */
function Score() {
  const { width, height } = useWindowSize();
  const titleOffsets = calcTitleOffest(width, height);
  return (
    <div
      style={{
        position: "absolute",
        right: titleOffsets.leftRight,
        top: titleOffsets.top,
        lineHeight: 0,
      }}
    >
      <p
        style={{
          fontFamily: "Roboto Mono",
          fontWeight: 100,
          fontSize: 0.03 * height,
          color: "#FF7A90",
          textAlign: "right",
        }}
      >
        Score:<strong style={{ fontWeight: 500 }}>1642334</strong>
      </p>
      <p
        style={{
          //top: 0.03 * height,

          fontFamily: "Roboto Mono",
          fontWeight: 100,
          fontSize: 0.03 * height,
          color: "#FF7A90",
          textAlign: "right",
          paddingTop: 0.025 * height,
        }}
      >
        High Score:<strong style={{ fontWeight: 500 }}>1642334</strong>
      </p>
    </div>
  );
}

export default App;
