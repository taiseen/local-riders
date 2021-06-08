import React, { createContext, useState } from 'react';

export const UserLoginContext = createContext();

const UserLoginContextProvider = (props) => {

    const [loginUser, setLoginUser] = useState({});

    return (
        <UserLoginContext.Provider value={{loginUser, setLoginUser}}>
            {props.children}
        </UserLoginContext.Provider>
    );
};

export default UserLoginContextProvider;