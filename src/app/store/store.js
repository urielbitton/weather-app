import React, { createContext, useState } from 'react'

export const StoreContext = createContext()

 
const StoreContextProvider = (props) => {

  const [darkMode, setDarkMode] = useState(false)

  return <StoreContext.Provider value={{ 
    darkMode, setDarkMode
  }}>
    {props.children}
  </StoreContext.Provider>
}
export default StoreContextProvider