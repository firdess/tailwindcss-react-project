import React from 'react'
import Button from './Button'

export default function Cart() {
  return (
    <div className='p-[10px] w-[340px] min-w-[340px] border border-solid border-[rgba(250,202,16,0.40)] bg-[#FFF] rounded-[15px] '>
      <div >
        <img className='rounded-[15px] shadow-[0px_7px_17px_0px_rgba(0,0,0,0.09)]' src='./images/blog1.jpg' />
      </div>
      <div className='px-[11px] pt-[27px]'>
        <h4>Lorem Ipsum is </h4>
        <p className='textType1  pb-[27px] border-b-[1px] border-[#dddddd]'>Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. </p>
      </div>
      <div className='flex items-center justify-between pt-[20px] pb-[25px] px-[11px]'>
        <div className='flex items-center gap-[7px] '>
          <img className='w-[30px] rounded-full' src='./images/blogimg.jpg' />
          <span className='font-displayFont text-[14px] font-normal text-blackTitle'>Alex Liones</span>
        </div>
        <div className='flex'>
          <img src='./images/time.svg' />
          <span className='text-[#B0B0B0] text-[10px] font-normal'>28,Aug 2020, 09:48:00</span>
        </div>
      </div>
      <div className="text-center pb-[19px]">
        <Button buttonText="Read More" backgroundColor='bg-black'  />
      </div>
    </div>
  )
}
