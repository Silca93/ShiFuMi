import React from 'react'

export default function Rock({setChoice, setHasPlayed, piedra}) {
  return (
    <div className="rock h-full w-1/2 flex justify-center items-center">
        <div onClick={() => {setChoice("rock"), setHasPlayed(true)}} className="container cursor-pointer h-[180px] w-[180px] max-[1000px]:h-[140px] max-[1000px]:w-[140px] border-[1.25rem] max-[550px]:h-[100px] max-[550px]:w-[100px] max-[550px]:border-[0.8rem] border-solid border-[#dc4563] bg-white rounded-full flex justify-center items-center">
            <img src={piedra} alt="" />
        </div>
    </div>
  )
}
