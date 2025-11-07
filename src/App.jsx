import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
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
    setDice((prevDice) => 
      prevDice.map((item)=> {
      return item.isHeld ? {...item, value: Math.ceil(Math.random() * 6) } : item   
    }))
  };

  function hold(id) {
    console.log("ID " + id);
    setDice((prevDice) =>
      prevDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      }),
    );
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

// Constant       xxx ctermfg=253 guifg=#c678dd
// String         xxx links to Constant

// ysiw"     →    Word   →   "Word"
// Visual Shift S '

// Usando visual mode:
// viw (seleciona a palavra)
// S" (surround com aspas)

// Trocar surround existente
// cs"'      →   "Word"   →   'Word'
// cs)(      →   (Word)   →   Word
// cs"(      →   "Word"   →   (Word)

// Delete
// ds '

// html
// ysiw<tdiv>
// → <div>Word</div>

// =======================
// hello
// const obj = {
//   value: Math.ceil(Math.random() * 6),
//   isHeld: false,
// }

// const obj = Object.fromEntries(
//   Array.from({ length: 10 }, (_, i) => [i, 0])
// );
//
// console.log(obj);
// // {0: 0, 1: 0, 2: 0, ..., 9: 0}

// function generateAllNewDice() {
//   return new Array(10)
//     .fill(0)
//     .map(() => ({
//       value: Math.ceil(Math.random() * 6),
//       isHeld: false,
//       id: nanoid()
//     }));
// }

//
