import React, {useState} from 'react'

import UserContext from './UserContext'

//Here we create the actual provider, This component('UserContextProvider) is a provider that wraps around components that need access to the user context. It manages the user state using the 'useState' hook and provides it to the context value

const UserContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    return (
        <UserContext.Provider value = { { user, setUser } }>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider