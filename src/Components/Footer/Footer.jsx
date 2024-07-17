
import React, { useState } from 'react';


export default function Footer({display, showRules}) {


  return (
    <div className="footer w-full h-[10%] flex justify-end items-center pr-5">
        <div className="rules w-[120px] h-[40px] border-2 border-solid border-gray rounded-xl flex justify-center items-center cursor-pointer">
            <button className="text-white" onClick={showRules}>RULES</button>
           
        </div>

    </div>
  )
}
