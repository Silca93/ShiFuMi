import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Accueil from './Components/Accueil/Accueil';
import './App.css';
import Footer from './Components/Footer/Footer';
import Youwin from './Components/Youwin/Youwin';
import Youlose from './Components/Youlose/Youlose';
import Draw from './Components/Draw/Draw';
import Rules from './Components/Rules/Rules';


function App() {
  const [count, setCount] = useState("Accueil")
  const [choice, setChoice] = useState("")
  const [hasPlayed, setHasPlayed] = useState(false)
  const [increment, setIncrement] = useState(0)
  const [decrement, setDecrement] = useState(increment)

  let choices = ["rock", "paper", "scissors"]
  let housePick = choices[Math.floor(Math.random()*3)]
  console.log("the house pick = " + housePick);

  // let score = 0;

 
  let scorePlus = () => {
    
    setIncrement((prevValue) => prevValue + 1);
  };
  
  let scoreMinus = () => {
    setDecrement((prevValue) => prevValue - 1);
  };

  let result = () => {
    (increment - decrement);
  }

  let draw;
  let didIwin;

  let reset = () => {
    setIncrement((prevValue) => prevValue = 0)
  }

  if (choice === housePick) {
    console.log("Draw");
    draw = true;
    
  }else if ((choice === "rock" && housePick === "scissors") || (choice === "paper" && housePick === "rock") || 
  (choice === "scissors" && housePick === "paper")) {  
        console.log("You win")
        didIwin = true;
        draw = false;
        console.log(didIwin);
        // scorePlus();
        // console.log(score);
        
        
         
   }else {
    console.log("You lost");
    didIwin = false;
    draw = false;
    console.log(didIwin);
    // count == "youlose"
   }

 let array = [1,2,3]



   useEffect(() => {
    if (didIwin) {
      scorePlus();
    }
  }, [increment]);


  const [display, setDisplay] = useState(false)

  let showRules = () => {
    setDisplay(!display)
    console.log(display);
  }

  return (
    <>
      {display?
       <Rules display={display} showRules={showRules} />
       :
       <div className="w-screen h-screen flex flex-col items-center gap-[80px]">
   
         
         <Header score={increment} result={result} hasPlayed={hasPlayed} setHasPlayed={setHasPlayed} scoremoins={decrement} reset={reset}/>
         {!hasPlayed && <Accueil setHasPlayed={setHasPlayed} setCount={setCount} setChoice={setChoice}/>}
         
         {hasPlayed && didIwin && !draw && <Youwin  housePick={housePick}  scorePlus={scorePlus} setHasPlayed={setHasPlayed} setChoice={setChoice} count={count} choice={choice} setCount={setCount}  />}
         {hasPlayed && !didIwin && !draw && <Youlose reset={reset} housePick={housePick} scoreMinus={scoreMinus} setHasPlayed={setHasPlayed} setChoice={setChoice} count={count} choice={choice} setCount={setCount}  />}
         {hasPlayed && draw && <Draw housePick={housePick} setHasPlayed={setHasPlayed} setChoice={setChoice} count={count} choice={choice} setCount={setCount}  />}
                     
         <Footer display={display} showRules={showRules} />
         
   
        
       </div>
        }
    </>
  )
}

export default App
