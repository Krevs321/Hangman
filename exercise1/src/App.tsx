import { useCallback, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import Keyboard from "./Keyboard";
import HangmanWord from "./HangmanWord";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetter = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetter.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currenLetters) => [...currenLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

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
      <div style={{ fontSize: "50px", textAlign: "center" }}>
        {isWinner && "You won, juhoo!!"} {isLoser && "You lost, try again :)"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetter.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((letter) => {
            wordToGuess.includes(letter);
          })}
          inactiveLetters={incorrectLetter}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
