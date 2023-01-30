import React from "react";
import CategoryItem from "./CategoryItem";


function CategoryList({ categoryList }) {
    
  return (
   
   
    <div className="w-full h-full">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryList.map(list=>{
            return <CategoryItem
            key={list.idCategory} {...list}
            />
        })}
      </div>
    </div>
   
  );
}

export default CategoryList;
