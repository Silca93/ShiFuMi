import React from 'react'

export default function Paper({setChoice, setHasPlayed, papel}) {
  return (
    <div className="paper  h-full w-1/2 flex  justify-end  pr-[3rem] max-[550px]:pr-[5rem]  items-center">
        <div onClick={() => {setChoice("paper"), setHasPlayed(true)}} className="container cursor-pointer  h-[180px] w-[180px] max-[1000px]:h-[140px] max-[1000px]:w-[140px] border-[1.25rem] max-[550px]:h-[100px] max-[550px]:w-[100px] max-[550px]:border-[0.8rem] border-solid border-[#5473f7] bg-white rounded-full flex justify-center items-center ">
            <img src={papel} alt="" />

        </div>  

    </div>
  )
}
