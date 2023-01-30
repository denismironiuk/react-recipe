import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-[50px] flex items-center justify-between bg-[green] fixed">
      <div>
        <h2 className="text-white font-bold text-2xl px-2">
            <Link to={""}> React Shop</Link>
           </h2>
      </div>
     
    </div>
  );
}

export default Header;
