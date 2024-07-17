import React from 'react'
import { useEffect, useState } from 'react'
import rules from  '../../assets/images/image-rules.svg'

export default function Rules({display, showRules}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center z-50 flex-col gap-5">
        <button className="w-[4rem] h-[4rem] bg-white rounded-full hover:bg-[#171d3f] hover:outline hover:outline-white hover:outline-2 duration-100 hover:text-white" onClick={showRules}>Ok</button>
        <img className="mt-5" src={rules} alt="" />
    </div>
  )
}
