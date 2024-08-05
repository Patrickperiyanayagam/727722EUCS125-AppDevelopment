import React, { createContext, useContext, useState } from 'react';

const StateContext =  createContext();

function ContextProvider({children}) {
    const [userdetails,setuserdetails] = useState({});
    const [loggedin,setloggedin] = useState(false);
    const [logtype,setlogtype] = useState('');

    return (
    <StateContext.Provider value={{userdetails,setuserdetails,loggedin,setloggedin,logtype,setlogtype}}>
        {children}
    </StateContext.Provider>
    )
}

export default ContextProvider;
export const useStateContext = ()=> useContext(StateContext);
