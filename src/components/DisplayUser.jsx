import React from 'react'
import { useSelector } from 'react-redux'

function DisplayUser() {
    const data = useSelector(state => state.users)
    console.log(data)
  return (
    <div>
     {
        data.map((user,id)=>{
            return(
                <li key={id} >
                
                    {user}
                    <button>  </button>
                </li>
            )
        })
     }
    </div>
  )
}

export default DisplayUser
