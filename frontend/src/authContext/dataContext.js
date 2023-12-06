import React from "react";

export const MyContext = React.createContext("");

export default function DataContext({ children }) {
    const [ form, setForm] = React.useState({});
 

  return (
    <MyContext.Provider value={{ form, setForm}}>
      {children}
    </MyContext.Provider>
  );
}