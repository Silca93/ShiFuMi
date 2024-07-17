import React from 'react';
import Paper from '../Paper/Paper';
import Rock from '../Rock/Rock';
import Scissors from '../Scissors/Scissors';
import paperImg from './../../assets/images/icon-paper.svg';
import scissorImg from './../../assets/images/icon-scissors.svg';
import rockImg from './../../assets/images/icon-rock.svg';

export default function Youlose(props) {
  return (
    <div className={`w-full h-3/5 flex flex-col justify-center items-center`}>
      <div className="laboxeflex w-1/2 h-[200px] flex justify-between  ">
        <h1 className="text-white text-[1.55rem] ml-10 max-[1100px]:ml-0 max-[900px]:hidden">YOU PICKED </h1>
        <h1 className="text-white text-[1.55rem] mr-10 max-[1100px]:mr-0 max-[900px]:hidden">THE HOUSE PICKED</h1>
      </div>
      <div className="left w-1/2 h-full flex justify-center items-center max-[800px]:flex-col max-[800px]:gap-3 ">
        {props.choice === "paper" && <Paper papel={paperImg} />}
        {props.choice === "rock" && <Rock piedra={rockImg} />}
        {props.choice === "scissors" && <Scissors tijera={scissorImg} />}

        <div className="w-[200px] h-[100px] flex justify-center items-center flex-col gap-3">
          <h1 className="text-white text-[2.25rem] max-[1000px]:text-[1.8rem]">YOU LOST</h1>
          <button
            onClick={() => {
              props.setChoice("");
              props.setHasPlayed(false);
              props.reset();
            }}
            className="bg-white w-[150px] max-[1000px]:w-[100px] rounded-md py-3"
          >
            PLAY AGAIN
          </button>
        </div>
        {props.housePick === "scissors" && <Scissors tijera={scissorImg} />}
        {props.housePick === "rock" && <Rock piedra={rockImg} />}
        {props.housePick === "paper" && <Paper papel={paperImg} />}
      </div>
    </div>
  );
}
