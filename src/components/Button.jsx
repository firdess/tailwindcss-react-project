import React from 'react'

export default function Button({ buttonText, backgroundColor }) {
  return (
    <button
      className={` ${backgroundColor}  w-[157px] text-white px-[18px]  hover:bg-orangeBtn font-bold tracking-[0.9px] text-[18px] rounded-[5px] h-[44px]`}>{buttonText}</button>
  )
}
