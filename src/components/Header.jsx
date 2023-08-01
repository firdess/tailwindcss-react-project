import React from 'react'

import logo from '../../public/images/logo.png'

import Button from './Button'
import Navbar from './Navbar'

export default function Header({buttonText}) {
  return (
    <div className='flex h-[44px] container px-[55px] mt-[20px] items-center justify-between  '>
      <div className='logo flex-shrink-0'>
        <img src={logo} alt='logo' />
      </div>
      <div className='flex items-center gap-[50px] mr-[26px]'>
        <Navbar />
        <Button buttonText="Get in Touch" backgroundColor="bg-[#FACA10]"/>
      </div>

    </div>
  )
}
