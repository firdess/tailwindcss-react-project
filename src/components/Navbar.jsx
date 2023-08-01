import React from 'react'
import navdata from '../navdata';
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  

  return (
    <div className='nav flex gap-[46px]'>
      {
        navdata.map((item) => {
          return (<div key={item.id}>
            <NavLink
              to={item.path}
              className='nav-item '

            >{item.title}</NavLink></div>)
        })
      }
    </div>
  )
}
