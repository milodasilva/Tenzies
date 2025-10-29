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

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}

export default App;
