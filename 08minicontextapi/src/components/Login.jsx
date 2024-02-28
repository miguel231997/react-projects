import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

//Using the provider and context in Components, in this component ('Login'), we use the 'useContext' hook to access the 'UserContext'. We also use the 'setUser' function provided by the context to update the user state. 

function Login() {

    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser( { username, password } )
    }

  return (
    <div>
        <h2> Login </h2>
        <input 
            type = "text"
            value = {username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
        />
        {" "}
        <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />
        <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login