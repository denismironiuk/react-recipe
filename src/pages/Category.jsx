import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import MealsList from '../components/MealsList'
import {getFilterByCategory} from '../configuration/api'

function Category() {
    const [meals,setMeals]=useState()
    const {name}=useParams()
    const goBack=useNavigate()

    useEffect(()=>{
        getFilterByCategory(name).then(data=>{
           
setMeals(data.meals)
        })
    },[name])

  return (
    <>
    <div className='px-2 py-2'>
    <button onClick={()=>goBack(-1)} className="text-[black] text-left border-[1px] bg-[lightblue] px-4 py-2 rounded-md  " >Go Back</button>
    </div>
    
    {meals ? (<MealsList  meals={meals}/>):(<p>Loading...</p>)}
    </>
  )
}

export default Category