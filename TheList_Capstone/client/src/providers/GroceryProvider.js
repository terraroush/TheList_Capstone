import React, { useState, createContext } from "react";

export const GroceryContext = createContext();

export const GroceryProvider = (props) => {
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const [ingredient, setIngredient] = useState([]);

  const getIngredientFromGrocery = (someText) => {
    return fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIKey}&query=${someText}&number=10`
    )
      .then((response) => response.json())
      .then((response) => {
        setIngredient((ingredient) => [response, ...ingredient]);
      });
  };

  return (
    <GroceryContext.Provider
      value={{
        getIngredientFromGrocery,
        ingredient,
        setIngredient,
      }}
    >
      {props.children}
    </GroceryContext.Provider>
  );
};
