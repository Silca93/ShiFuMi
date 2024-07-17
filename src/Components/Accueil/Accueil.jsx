import React from 'react'
import triangle from './../../assets/images/bg-triangle.svg'
import Rock from '../Rock/Rock';
import Paper from '../Paper/Paper';
import Scissors from '../Scissors/Scissors';
import papelIcon from '../../assets/images/icon-paper.svg'
import scissorIcon from './../../assets/images/icon-scissors.svg'
import rockIcon from './../../assets/images/icon-rock.svg'
import { useState } from 'react';

console.log(triangle);

export default function Accueil(props) {
  return (
    <div className={`containerr w-1/2 h-3/5 flex flex-col justify-center items-center`}>
        <div className="top w-full h-1/2 flex">
            <Paper setHasPlayed={props.setHasPlayed} count={props.count} setCount={props.setCount} setChoice={props.setChoice} papel={papelIcon} />
            <Scissors setHasPlayed={props.setHasPlayed} count={props.count} setCount={props.setCount} setChoice={props.setChoice} tijera={scissorIcon}/>
        </div>
        <div className="bot w-full h-1/2 flex justify-center">
            <Rock setHasPlayed={props.setHasPlayed} count={props.count} setChoice={props.setChoice} piedra={rockIcon}/>
        </div>
    </div>
    
  )
}
