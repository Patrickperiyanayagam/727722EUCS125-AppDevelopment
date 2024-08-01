import React, { createContext, useContext, useState } from 'react';

const StateContext =  createContext();

function ContextProvider({children}) {
    const [userdetails,setuserdetails] = useState({});

    return (
    <StateContext.Provider value={{userdetails,setuserdetails}}>
        {children}
    </StateContext.Provider>
    )
}

export default ContextProvider;
export const useStateContext = ()=> useContext(StateContext);
