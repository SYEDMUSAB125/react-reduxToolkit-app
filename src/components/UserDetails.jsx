import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import Button from './Button'

function UserDetails() {
  return (
    <div>
      <h1>list of all users</h1>
      <Button  >Add new users</Button>
    <ul>
        <li>misbah</li>
        <li>musab</li>
        <li>mohsin</li>
    </ul>
      <hr />
      < DeleteAllUsers />
    </div>
  )
}

export default UserDetails
