import React from "react";

const Ingredient = ({
  ingredient,
  chosenIngredient,
  setChosenIngredient,
  planId,
}) => {
  const handleChosenIngredient = (e) => {
    setChosenIngredient({
      name: ingredient.name,
      planId,
    });
  };

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
