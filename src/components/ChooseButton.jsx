import React, { useState } from 'react'

export default function ChooseButton({ buttonText }) {
  const [isActive, setIsActive] = useState(false);
  const HandleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <div className='flex items-center '>
      <div className={`w-[22px] h-[22px] rounded-full  inline-block ${isActive ? 'bg-orangeBtn' : 'bg-[#F6F6F6]'}`}></div>
      <div className={`w-[19px] h-[2px] ${isActive ? 'bg-orangeBtn' : 'bg-[#F6F6F6]'}`}></div>

      <div>
        <button className={`px-[12px] min-w-[157px]  font-displayFont text-[18px] font-bold tracking-[0.9px] flex justify-center items-center rounded-[5px] py-[12px] border-solid border-[2px] ${isActive ? 'bg-orangeBtn text-white border-orangeBtn' : 'bg-white text-[#C4C4C4]  border-[#F6F6F6] '}`} onClick={HandleClick}>{buttonText}</button>
      </div>
    </div>
  )
}
