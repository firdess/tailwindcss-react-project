import React, { useState } from 'react'

export default function Rewiev({ users, activeIndex }) {

  return (
    <div className="flex container justify-center ">
      {
        users.map((user, index) => {
          return <div key={user.id} className={`flex flex-col items-center w-[864px] justify-center transition-opacity duration-300 ease-in ${index === activeIndex ? 'opacity-100' : 'hidden opacity-0'}`}>

            <div className='relative flex justify-center items-center w-[204px] h-[204px]  '>
              <img src='./images/round.jpg' className='absolute -z-10 ' />
              <img src={user.image} className="w-[156px] h-[156px] rounded-full object-cover " />
              <img src='./images/quotes.svg' className='absolute right-[18px] bottom-[12px]' />
            </div>
            <p className='textType2 mt-[32px] line-clamp-3 text-center h-[100px]'>{user.quote}</p>
            <div className='flex items-center mt-[28px] '>
              <h4 className='tracking-[1.2px]  capitalize'>{user.name} |</h4>
              <span className='textType2 tracking-[0.85px] capitalize'> &nbsp;  {user.job}</span>
            </div>
          </div>
        })
      }

    </div>
  )
}
