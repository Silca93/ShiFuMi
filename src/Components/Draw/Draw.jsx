import React from 'react'
import Paper from '../Paper/Paper'
import Scissors from '../Scissors/Scissors'
import Rock from '../Rock/Rock'
import paperImg from './../../assets/images/icon-paper.svg'
import scissorImg from './../../assets/images/icon-scissors.svg'
import rockImg from './../../assets/images/icon-rock.svg'

export default function Draw(props) {
  return (
    <div className={`w-full h-3/5 flex flex-col justify-center items-center`}>
      <div className="laboxeflex w-1/2 h-[200px] flex justify-between px-[50px]"> 
        <h1 className="text-white text-[1.55rem] ml-10 max-[1100px]:ml-0 max-[900px]:hidden">YOU PICKED </h1> 
        <h1 className="text-white text-[1.55rem]  mr-10 max-[1100px]:mr-0 max-[900px]:hidden">THE HOUSE PICKED</h1>
      </div>
      
        
        <div className="left  w-[30rem]  h-full flex justify-center items-center max-[800px]:flex-col max-[800px]:gap-3">
            {
              props.choice == "paper" && <Paper papel={paperImg}/>
            }
            
            {
              props.choice == "rock" && <Rock piedra={rockImg}/>
            }
            {
              props.choice == "scissors" && <Scissors tijera={scissorImg}/>
            }
            
            <div className="w-[200px] m-[2rem] h-[140px] flex justify-center items-center flex-col gap-3">
                <h1 className='text-white text-[2.25rem] max-[1000px]:text-[1.8rem]'>DRAW</h1>
                <button onClick={() => {props.setChoice(""), props.setHasPlayed(false)}} className="bg-white w-[150px] rounded-md py-3 max-[1000px]:w-[100px]">PLAY AGAIN</button>
            </div>
            {
              props.housePick == "scissors" && <Scissors  tijera={scissorImg}/>
            }
            {
              props.housePick == "rock" && <Rock  piedra={rockImg}/>
            }
            {
              props.housePick == "paper" && <Paper  papel={paperImg}/>
            }
        </div>
    </div>
  )
}
