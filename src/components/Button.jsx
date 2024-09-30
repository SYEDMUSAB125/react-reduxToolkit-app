import React, { Children } from 'react'
import './button.css'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/UserSlice'

function Button({children}) {
  const dispatch = useDispatch()
  const addNewUser = (payload) => {
 dispatch(setUser(payload))
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
