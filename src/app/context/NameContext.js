'use client'
import { createContext, useState } from "react";

export const dforTimeline = createContext(null)

export const TimelineProvider = ({children}) =>{
  const [d, setD] = useState([])

  return (
    <dforTimeline.Provider value={{d, setD}}>
        {children}
    </dforTimeline.Provider>
  )
}