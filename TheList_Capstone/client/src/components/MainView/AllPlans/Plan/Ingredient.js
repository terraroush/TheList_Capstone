import React, { useState } from "react";

const Ingredient = ({ ingredient, chosenIngredient, setChosenIngredient }) => {
  const handleChosenIngredient = (e) => {
    setChosenIngredient(ingredient.name);
  };
  {
    console.log(chosenIngredient);
  }
  return (
    <div
      value={chosenIngredient}
      onClick={handleChosenIngredient}
      className="ingredient"
    >
      {ingredient.name}
    </div>
  );
};
export default Ingredient;
