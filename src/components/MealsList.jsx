import React from 'react'
import Meal from './Meal'


function MealsList({meals}) {
    
  return (
    <div className=" ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals.map(list=>{
            return <Meal
            key={list.idMeal} {...list}
            />
        })}
      </div>
    </div>
  )
}

export default MealsList