import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import Keyboard from "./Keyboard";
import HangmanWord from "./HangmanWord";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        margin: "0 auto",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "800px",
      }}
    >
      <div style={{ fontSize: "50px", textAlign: "center" }}>Lose win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
