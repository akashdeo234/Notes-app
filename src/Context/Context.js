import { createContext, useState } from 'react';

export const colorMoodContext = createContext();

export const  Context = ({children}) => {
    const [color,setColor] = useState();
    return(
        <colorMoodContext.Provider value={{color,setColor}}>
            {children}
        </colorMoodContext.Provider>
    )
}