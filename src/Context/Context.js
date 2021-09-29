import { createContext, useState } from 'react';

export const colorMoodContext = createContext();

export const userContext = createContext();

export const  Context = ({children}) => {
    const [color,setColor] = useState();
    return(
        <colorMoodContext.Provider value={{color,setColor}}>
            {children}
        </colorMoodContext.Provider>
    )
}

export const UserContextFun = ({children}) =>{
    const [user,setUser] = useState("");
    return(
        <userContext.Provider value={[user,setUser]}>
            {children}
        </userContext.Provider>
    )
}