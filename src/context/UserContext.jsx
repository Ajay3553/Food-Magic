import React, { createContext, useState } from 'react'
import foodItems from '../food'
export const dataContext = createContext();

function UserContext({children}) {
    const [input, setInput] = useState("");
    let [category, setCategory] = useState(foodItems);
    const data = {
        input,
        setInput,
        category,
        setCategory
    }
  return (
    <div>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext