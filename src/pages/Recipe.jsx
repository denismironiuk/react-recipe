import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RecipeItem from '../components/RecipeItem'
import {getMealById} from '../configuration/api'

function Recipe() {
  const [recipe,setRecipe]=useState({})
  const goBack=useNavigate()
   const{id}= useParams()
    useNavigate()
    useEffect(()=>{
        getMealById(id).then(data=>{
          console.log(data.meals[0])
            setRecipe(data.meals[0])
        })
    },[])
  return (
    <>
    <div>
    <button onClick={()=>goBack(-1)} className="text-[black] text-left border-[1px] bg-[lightblue] px-4 py-2 rounded-md  " >Go Back</button>
    </div>
    {recipe ? (<RecipeItem recipe={recipe}/>):(<p>Loading...</p>)}
    </>
  )
}

export default Recipe