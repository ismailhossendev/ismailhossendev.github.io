import React, { createContext, useState } from 'react';


export const mainContext = createContext();

const MainContext = ({ children }) => {
    const [light, setLight] = useState(false)

    const value = { light, setLight }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;