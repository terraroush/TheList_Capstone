import React from "react";
import Ingredient from "./Ingredient";
import "./IngredientList.css";

const IngredientList = ({
  ingredientData,
  chosenIngredient,
  setChosenIngredient,
  planId,
}) => {
  return (
    <section className="ingredient-container">
      {ingredientData[0]?.map((ingredient) => {
        return (
          <Ingredient
            key={ingredient.name}
            ingredient={ingredient}
            chosenIngredient={chosenIngredient}
            setChosenIngredient={setChosenIngredient}
            planId={planId}
          />
        );
      })}
    </section>
  );
};
export default IngredientList;
