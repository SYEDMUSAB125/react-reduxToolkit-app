import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import Button from './Button'
import DisplayUser from './DisplayUser'

function UserDetails() {
  return (
    <div>
      <h1>list of all users</h1>
      <Button  >Add new users</Button>
    <ul>
        < DisplayUser />
    </ul>
      <hr />
      < DeleteAllUsers />
    </div>
  )
}

export default UserDetails
