import React, { useEffect, useState } from "react";
import { useWindowSize, useEvent, getColor } from "./Utils";
import { calcBlockSize } from "./Constants";
import cloneDeep from "lodash.clonedeep";

const space = 80;

function Game() {
  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const W = 87;
  const S = 83;
  const D = 68;
  const A = 65;

  const { width, height } = useWindowSize();
  const blockSize = calcBlockSize(width);
  const [gameOver, setGameOver] = useState(false);
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  //initalize
  const initialize = () => {
    // console.log("CALLING INITIALIZE");

    let newGrid = cloneDeep(data);
    console.log(newGrid);

    addNumber(newGrid);
    console.table(newGrid);
    addNumber(newGrid);
    console.table(newGrid);
    setData(newGrid);
    //setFlatData(flatten(data));
  };

  //Add Number Ba- Add an Item
  const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
      if (gridFull) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if (newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
      if (attempts > 50) {
        gridFull = true;
        let gameOverr = checkIfGameOver();
        if (gameOverr) {
          alert("game over");
          // setGameOver(true);
        }
        // setGameOver(true);
      }
    }
  };

  //swipeLeft
  const swipeLeft = (dummy) => {
    console.log("swipe left");
    let oldGrid = data;
    let newArray = cloneDeep(data);

    for (let i = 0; i < 4; i++) {
      let b = newArray[i];
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast++;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            b[fast] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray);
    }
    if (dummy) {
      return newArray;
    } else {
      setData(newArray);
      //setFlatData(flatten(data));
    }
  };

  //swipes Right
  const swipeRight = (dummy) => {
    console.log("swipe right");
    let oldData = data;
    let newArray = cloneDeep(data);

    for (let i = 3; i >= 0; i--) {
      let b = newArray[i];
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast--;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            b[fast] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }
    if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
      addNumber(newArray);
    }
    if (dummy) {
      return newArray;
    } else {
      setData(newArray);
      //setFlatData(flatten(data));
    }
  };

  //swipes down
  const swipeDown = (dummy) => {
    console.log("swipe down");
    console.log(data);
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));
    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            b[fast][i] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }
    if (JSON.stringify(b) !== JSON.stringify(oldData)) {
      addNumber(b);
    }
    if (dummy) {
      return b;
    } else {
      setData(b);
      //setFlatData(flatten(data));
    }
  };

  //swipes up
  const swipeUp = (dummy) => {
    console.log("swipe up");
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < 4; i++) {
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            b[fast][i] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldData) !== JSON.stringify(b)) {
      addNumber(b);
    }
    if (dummy) {
      return b;
    } else {
      setData(b);
      //setFlatData(flatten(data));
    }
  };

  //gameOver?
  // Check Gameover
  const checkIfGameOver = () => {
    console.log("CHECKING GAME OVER");
    // let original = cloneDeep(data);
    let checker = swipeLeft(true);

    if (JSON.stringify(data) !== JSON.stringify(checker)) {
      return false;
    }

    let checker2 = swipeDown(true);

    if (JSON.stringify(data) !== JSON.stringify(checker2)) {
      return false;
    }

    let checker3 = swipeRight(true);

    if (JSON.stringify(data) !== JSON.stringify(checker3)) {
      return false;
    }

    let checker4 = swipeUp(true);

    if (JSON.stringify(data) !== JSON.stringify(checker4)) {
      return false;
    }

    return true;
  };

  //reset
  const resetGame = () => {
    setGameOver(false);
    const emptyGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    addNumber(emptyGrid);
    addNumber(emptyGrid);
    setData(emptyGrid);
    //setFlatData(flatten(data));
  };

  //HANDLE KEY DOWN
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case UP_ARROW:
        swipeUp();
        break;
      case DOWN_ARROW:
        swipeDown();
        break;
      case RIGHT_ARROW:
        swipeRight();
        break;
      case LEFT_ARROW:
        swipeLeft();
        break;
      case W:
        swipeUp();
        break;
      case S:
        swipeDown();
        break;
      case A:
        swipeLeft();
        break;
      case D:
        swipeRight();
        break;
      default:
        break;
    }
    let gameOverr = checkIfGameOver();
    if (gameOverr) {
      alert("gameOver");
      setGameOver(true);
    }
  };

  useEffect(() => {
    initialize();
    // document.addEventListener("keydown", handleKeyDown);
  }, []);

  useEvent("keydown", handleKeyDown);
  // if (props.resetGame) {
  //   resetGame();
  //   console.log("resetting");
  //   props.setResetGame(false);
  // }

  return (
    <div
      style={{
        alignSelf: "center",
        margin: "auto",
        position: "relative",
        display: "flex",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {data.map((row, one) => {
        return (
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: (one - 2) * space,
            }}
            key={one}
          >
            {row.map((digit, index) => {
              return (
                <Block num={digit} width={width} index={index} key={index} />
              );
            })}
          </div>
        );
      })}
      <div
        style={{
          top: space * 2 + 30,
          left: -50,
          background: "#FF7A90",
          position: "absolute",
          fontFamily: "Roboto Mono",
          fontWeight: 500,
          borderRadius: 15,
          width: 100,

          fontSize: 0.03 * height,
        }}
      >
        <div
          style={{ padding: 5, color: "#2d394d" }}
          onClick={() => resetGame()}
        >
          New Game
        </div>
      </div>
    </div>
  );
}

const Block = ({ num, width, index }) => {
  const { blockStyle } = style;
  const blockSize = calcBlockSize(width);
  return (
    <div
      style={{
        ...blockStyle,
        color: getColor(num),
        height: blockSize.height,
        width: blockSize.width,
        left: (index - 2.5) * space,
        fontSize: 0.5 * blockSize.height,
      }}
    >
      {num !== 0 ? num : "•"}
    </div>
  );
};

const style = {
  blockStyle: {
    //background: "lightgray",
    position: "absolute",
    margin: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    fontWeight: "800",
    //color: "white",
  },
};
export default Game;
