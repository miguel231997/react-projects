import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


//In this component we use the useContext hook to access the UserContext. We extract the user object from the context to display the users profile information


function Profile() {
  const { user } = useContext(UserContext)

  if(!user) return <h1> Not Logged In </h1>
  return (
    <div>Profile : { user.username }</div>
  )
}

export default Profile