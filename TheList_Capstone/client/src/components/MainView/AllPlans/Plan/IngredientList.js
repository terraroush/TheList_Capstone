import React from "react";
import { useContext } from "react";
import { GroceryContext } from "../../../../providers/GroceryProvider";
import Ingredient from "./Ingredient";

const IngredientList = () => {
  const { ingredientData, setIngredientData } = useContext(GroceryContext);
  console.log(ingredientData[0]);
  return (
    <section>
      {ingredientData[0].map((ingredient) => {
        return <Ingredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </section>
  );
};
export default IngredientList;
