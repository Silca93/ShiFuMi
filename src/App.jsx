import { useState } from 'react';
import Header from './Components/Header';
import Accueil from './Components/Accueil/Accueil';
import './App.css';
import Footer from './Components/Footer/Footer';
import Youwin from './Components/Youwin/Youwin';
import Youlose from './Components/Youlose/Youlose';
import Draw from './Components/Draw/Draw';
import Rules from './Components/Rules/Rules';

function App() {
  const [count, setCount] = useState("Accueil");
  const [choice, setChoice] = useState("");
  const [hasPlayed, setHasPlayed] = useState(false);
  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState(false);
  const [housePick, setHousePick] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  // Function to handle player's choice
  const handleChoice = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setChoice(playerChoice);
    setHousePick(computerChoice);
    setHasPlayed(true);
    
    // Determine outcome and update score
    if (playerChoice === computerChoice) {
      // Draw - do nothing
      return;
    }
    
    const isWin = (
      (playerChoice === "rock" && computerChoice === "scissors") || 
      (playerChoice === "paper" && computerChoice === "rock") || 
      (playerChoice === "scissors" && computerChoice === "paper")
    );
    
    if (isWin) {
      setScore(prev => prev + 1);
    } else {
      setScore(prev => Math.max(0, prev - 1));
    }
  };

  const reset = () => {
    setScore(0);
  };

  const playAgain = () => {
    setChoice("");
    setHasPlayed(false);
    setHousePick(null);
  };

  // Determine current game state
  const isDraw = choice === housePick;
  const didIwin = !isDraw && (
    (choice === "rock" && housePick === "scissors") || 
    (choice === "paper" && housePick === "rock") || 
    (choice === "scissors" && housePick === "paper")
  );

  const showRules = () => {
    setDisplay(!display);
  };

  return (
    <>
      {display ? (
        <Rules display={display} showRules={showRules} />
      ) : (
        <div className="w-screen h-screen flex flex-col items-center gap-[80px]">
          <Header score={score} reset={reset} />
          
          {!hasPlayed && (
            <Accueil 
              setHasPlayed={(value) => {
                if (!value) playAgain();
                setHasPlayed(value);
              }}
              setCount={setCount} 
              setChoice={handleChoice}
            />
          )}
          
          {hasPlayed && didIwin && !isDraw && (
            <Youwin  
              housePick={housePick}
              setHasPlayed={() => playAgain()}
              setChoice={setChoice} 
              count={count} 
              choice={choice} 
              setCount={setCount}  
            />
          )}
          
          {hasPlayed && !didIwin && !isDraw && (
            <Youlose 
              reset={reset} 
              housePick={housePick}
              setHasPlayed={() => playAgain()}
              setChoice={setChoice} 
              count={count} 
              choice={choice} 
              setCount={setCount}  
            />
          )}
          
          {hasPlayed && isDraw && (
            <Draw 
              housePick={housePick}
              setHasPlayed={() => playAgain()}
              setChoice={setChoice} 
              count={count} 
              choice={choice} 
              setCount={setCount}  
            />
          )}
          
          <Footer display={display} showRules={showRules} />
        </div>
      )}
    </>
  );
}

export default App;