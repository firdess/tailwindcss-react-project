import React from 'react'
import Button from './Button'

export default function Connection() {
  return (
    <div className='container backgroundMap relative h-[800px] flex items-center justify-center '>
      <div className='w-[938px] absolute top-[149px] bg-white rounded-[15px] px-[83px] py-[60px] shadow-[0px_19px_34px_14px_rgba(0,0,0,0.06)]'>
        <h2 className='subtitle text-center pb-[42px]'>Get in Touch</h2>
        <form className='grid grid-cols-2  gap-x-[85px] gap-y-[53px]'>
          <div className='group'>
            <label className='label'>Name    </label>
            <input type="text" value="Lorem Ipusum"/>
          </div>
          <div className='group'>
            <label className='label' >Email  </label>
            <input type="email" value="LoremIpusum@mail.com" />
          </div>
          <div className='group'>
            <label className='label' >Phone</label>
            <input type="phone" value="12345"/>
          </div>
          <div className='group'>
            <label className='label' >Subject</label>
            <input type="text" value="Choose your subject"/>
          </div>
        </form>
        <div className='text-center mt-[67px]'>
        <Button buttonText="Submit" backgroundColor="bg-orangeBtn" />
        </div>
      </div>
    </div>
  )
}
