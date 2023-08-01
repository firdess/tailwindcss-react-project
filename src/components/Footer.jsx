import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function Footer() {
  return (
    <div className='container  '>
      <div className='flex flex-col items-center' >
        <div className='mb-[50px]'>  <img src='./images/logo.png' /></div>
        <Navbar />
        <div className='mt-[60px] flex gap-[44px] mb-[44px]'>
          <a href='#'>
            <img src='./images/facebook.svg' />
          </a>
          <a href='#'>
            <img src='./images/twitter.svg' />
          </a>
          <a href='#'>
            <img src='./images/youtube.svg' />
          </a>
          <a href='#'>
            <img src='./images/linkedin.svg' />
          </a>
          <a href='#'>
            <img src='./images/pinterest.svg' />
          </a>
        </div>
        <div className='text-[#A5A5A5] text-xs tracking-[3.12px] font-light mb-[43px]'>
          Copyrights ©2020 Thefirm. All Right Reserved
        </div>
      </div>
    </div>
  )
}
