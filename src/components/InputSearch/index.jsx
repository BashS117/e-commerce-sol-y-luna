import React from 'react'
import { useContext } from "react"
import { PerfumesContext } from "../../Context"

const InputSearch = () => {
    const {setSearchByTitle}=useContext(PerfumesContext)
  return (
    <input 
    className="sm:mt-1 bg-gray-footer sm:mb-1 rounded-sm sm:w-[100%]  p-3   focus:outline-none w-[700px] "
    onChange={(event)=>setSearchByTitle( event.target.value)}
    type="search" 
    placeholder="Búsqueda en catálogo" />
  )
}

export default InputSearch
