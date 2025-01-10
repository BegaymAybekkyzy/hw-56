import React from "react";
import { IIngredientInfo, IIngredientQuantity } from "../../types";
import "./Ingredient.css";

interface Props {
  ingredientAddition: (index: number, price: number) => void;
  index: number;
  ingredient: IIngredientInfo;
  ingredients: IIngredientQuantity[];
  ingredientRemoval: (index: number, price: number) => void;
}

const Ingredient: React.FC<Props> = ({
  ingredientAddition,
  index,
  ingredient,
  ingredients,
  ingredientRemoval,
}) => {
  return (
    <div>
      <button
        onClick={() => ingredientAddition(index, ingredient.price)}
        className={`image-button ${ingredient.name}-img`}
      ></button>
      <p>
        {ingredient.name}: x{ingredients[index].count}
      </p>
      <p>Price: {ingredient.price}</p>
      <button onClick={() => ingredientRemoval(index, ingredient.price)}>
        Remove
      </button>
      <hr />
    </div>
  );
};

export default Ingredient;
