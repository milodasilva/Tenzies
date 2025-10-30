import Die from "./Die";
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((item, index) => (
    <Die key={index} value={item} />
  ));

  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
