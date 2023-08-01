import React from 'react'
import Rewiev from './Rewiev'

export default function Comment({users,setUsers,activeIndex,handleNext,handlePrev}) {
  return (
    <div className='my-[100px]'>
      <h2 className='subtitle text-center  pb-[50px]'>Our <span className='line'>Testimonials</span></h2>
      <Rewiev users={users} setUsers={setUsers} activeIndex={activeIndex} />
      <div className='dots flex justify-center gap-[10px] mt-[28px]'>
        <button onClick={handlePrev} className='dot'></button>
        <button className='dot'></button>
        <button onClick={handleNext} className='dot'></button>
      </div>
    </div>
  )
}
