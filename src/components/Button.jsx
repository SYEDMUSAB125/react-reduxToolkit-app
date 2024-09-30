import React, { Children } from 'react'
import './button.css'
import { fakeUserData } from '../api'
function Button({children}) {
  const addNewUser = (payload) => {
console.log(payload)
  }
  return (
    <div>
      <button onClick={ ()=> addNewUser(fakeUserData()) } className='btn' >
        {children}
      </button>
    </div>
  )
}

export default Button
