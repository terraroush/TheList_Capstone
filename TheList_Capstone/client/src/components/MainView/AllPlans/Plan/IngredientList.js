import React, { useState } from "react";
import Ingredient from "./Ingredient";
import "./IngredientList.css";

const IngredientList = ({
  ingredientData,
  chosenIngredient,
  setChosenIngredient,
}) => {
  return (
    <section className="ingredient-container">
      {ingredientData[0]?.map((ingredient) => {
        return (
          <Ingredient
            key={ingredient.id}
            ingredient={ingredient}
            chosenIngredient={chosenIngredient}
            setChosenIngredient={setChosenIngredient}
          />
        );
      })}
    </section>
  );
};
export default IngredientList;
