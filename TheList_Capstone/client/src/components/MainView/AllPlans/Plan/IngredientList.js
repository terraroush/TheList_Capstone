import React, { useState } from "react";
import Ingredient from "./Ingredient";
import "./IngredientList.css";

const IngredientList = ({ ingredientData }) => {
  return (
    <section className="ingredient-container">
      {ingredientData[0]?.map((ingredient) => {
        return <Ingredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </section>
  );
};
export default IngredientList;
