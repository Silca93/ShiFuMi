import React from 'react';

export default function Header({ score, reset, hasPlayed }) {
  return (
    <div className="container w-1/2 h-1/5 flex justify-center">
      <div className="w-full h-full border-2 border-solid border-white rounded-xl mt-10 leading-none pl-5 pr-5 flex justify-between">
        <div className="left w-1/2 h-full flex flex-col items-start justify-center">
          <h1 className="text-white text-[2.25rem] max-[900px]:text-[1.7rem] max-[500px]:text-[1.4rem] max-[400px]:text-[1.2rem]">ROCK</h1>
          <h1 className="text-white text-[2.25rem] max-[900px]:text-[1.7rem] max-[500px]:text-[1.4rem] max-[400px]:text-[1.2rem]">PAPER</h1>
          <h1 className="text-white text-[2.25rem] max-[900px]:text-[1.7rem] max-[500px]:text-[1.4rem] max-[400px]:text-[1.2rem]">SCISSORS</h1>
        </div>
        <div className="right w-1/2 h-full flex flex-col items-end justify-center max-[500px]:ml-4">
          <div className="square w-[140px] h-[110px] bg-white max-[900px]:w-[70px] max-[500px]:h-[80px] max-[500px]:w-[60px] rounded-md flex flex-col gap-4 items-center justify-center">
            <h1 className="pt-2">SCORE</h1>
            <h1 className="text-[3.15rem] max-[500px]:text-[2.4rem]">{score}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}