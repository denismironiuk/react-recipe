import React, { useEffect, useState } from 'react'

function Search({cb=Function.prototype}) {
   const[value,setValue]=useState('')
   console.log(value)
   const handleKey=(e)=>{
    if(e.key==='Enter'){
handleSubmit()
    }
   }
   const handleSubmit=()=>{
    cb(value)
       }
    
useEffect(()=>{
    handleSubmit()
},[value])
 
  return (
    <div className='flex-row'>
        <div className='p-4 mt-4 mb-4 border-b-[1px] border-[lightblue]'>
            <input className='outline-none w-[100%]'
            type="serch" 
            id='search' 
            placeholder='search'
            onKeyDown={handleKey}
            onChange={(e)=>setValue(e.target.value)}
            value={value}
            />
            <button onClick={handleSubmit}>

            </button>
        </div>
    </div>
  )
}

export default Search