import React from "react";

function RecipeItem({ recipe }) {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <h2 className="text-4xl py-8 w-full"> {recipe.strMeal} </h2>

      <ul className=" flex flex-col border-[5px] justify-between items-center px-4 py-3  ">
        <li className=" w-full py-4 flex flex-col md:flex-row justify-around  ">
          <img className=" h-[300px] sm:w-full object-contain" src={recipe.strMealThumb} alt="" />
          <table class="table-fixed w-full md:w-[60%] ">
            <thead>
              <tr>
                <th>Ingridient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr className="border-[2px]" key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </li>
        <li>
          {" "}
          <p>{recipe.strInstructions}</p>
        </li>

        {recipe.strYoutube ? (
          <div className="py-4">
            
            <iframe
              className="w-[300px] sm:w-[550px] sm:h-[350px]"
              title={recipe.idMeal}
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                -11
              )}`}
              allowfullscreen
            />
          </div>
        ) : null}
        <li></li>
      </ul>
    </div>
  );
}

export default RecipeItem;
