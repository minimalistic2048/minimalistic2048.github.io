import "./App.css";
import "./assets/fonts.css";
import { calcTitleOffest } from "./Constants.js";
import React, { useState } from "react";
import { useWindowSize } from "./Utils";
import Game from "./Game";

function App() {
  //const [resetGame, setReset] = useState();
  function setResetFunc(resetFunc) {
    console.log(resetFunc);
    this.handleClick = resetFunc;
  }

  return (
    <div className="App">
      <Title handleClick={this.handleClick} />
      <Score />
      <Game resetMethod={(resetFunc) => setResetFunc(resetFunc)} />
    </div>
  );
}

/**
 * Renders title
 * @returns React Component of Title
 */
function Title(props) {
  const { width, height } = useWindowSize();
  const titleOffsets = calcTitleOffest(width, height);
  function handleTheClick() {
    console.log("clicked");
    props.handleClick();
  }
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
      <button onClick={() => handleTheClick()}>New Game</button>
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
