import Die from "./Die";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return Array.from({ length: 3 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false, // agora começa desbloqueado
      id: nanoid(),
    }));
  }

  const diceElements = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      hold={() => hold(item.id)}
    />
  ));

  function rollDice() {
    // New game if gameWon is false
    if (!gameWon) {
      setDice((prevDice) =>
        prevDice.map((item) =>
          item.isHeld
            ? item // não altera se está segurado
            : { ...item, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else {
      setDice(generateAllNewDice());
      // buttonRef.current.focus()
    }
  }

  function hold(id) {
    // console.log("ID " + id);
    setDice((prevDice) =>
      prevDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      }),
    );
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game to start again."</p>
        )}
      </div>
      <div className="dice-container">{diceElements}</div>
      <button ref={buttonRef} className="roll-btn" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
      {/*  <input ref={buttonRef} /> */}
    </main>
  );
}
