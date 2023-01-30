import React from 'react'
import { Link } from 'react-router-dom'

function Meal(props) {
    const{strMeal,idMeal,strMealThumb}=props
  return (
   
      <ul className=" flex flex-col border-[5px] justify-between items-center px-4 py-3  ">
        <li className="py-4">
          <img src={strMealThumb} alt="" />
        </li>
        <li>
          <h2 className="text-4xl py-8
           w-full">{strMeal}</h2>
        </li>
        
        <div className="">
          <Link to={`/meal/${idMeal}`} className=" text-[white] text-left border-[1px] bg-[lightblue] px-4 py-4 rounded-md ">
            Watch recipe
          </Link>
        </div>
      </ul>
    
  )
}

export default Meal