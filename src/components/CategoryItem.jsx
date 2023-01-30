import React from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  const {  strCategory, strCategoryThumb, strCategoryDescription } =
    props;
   
  return (
    <>
    
    <div className=" border-[5px] px-6 py-4  ">
      <ul className=" flex flex-col justify-between  items-center ">
        <li className="py-4">
          <img src={strCategoryThumb} alt="" />
        </li>
        <li>
          <h2 className="text-4xl py-4 w-full">{strCategory}</h2>
        </li>
        <li>
          <p className="py-4 ">{strCategoryDescription.slice(0,30)}</p>
        </li>
        <div className="w-full">
          <Link to={`/category/${strCategory}`} className=" text-[white] text-left border-[1px] bg-[lightblue] px-4 py-2 rounded-md ">
            Watch Category
          </Link>
        </div>
      </ul>
    </div>
    </>
  );
}

export default CategoryItem;
