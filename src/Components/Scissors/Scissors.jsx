import React from 'react'

export default function Scissors({setChoice, setHasPlayed, tijera}) {
  return (
    <div className="scissors h-full w-1/2 flex justify-center items-center relative">
        <div onClick={() => {setChoice("scissors"), setHasPlayed(true)}} className="container cursor-pointer h-[180px] w-[180px] max-[1000px]:h-[140px] max-[1000px]:w-[140px] max-[550px]:h-[100px] max-[550px]:w-[100px] max-[550px]:border-[0.8rem] border-[1.25rem] border-solid border-[#efa925] bg-white rounded-full flex justify-center items-center ">
            <img src={tijera} alt="" />

        </div>

    </div>
  )
}
