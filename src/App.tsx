import { useState } from 'react';
import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';

const App = () => {
  interface Ingredient {
    name: string;
    price: number;
    image: string;
  }

  const INGREDIENTS: Ingredient[] = [
    {
      name: 'Meat',
      price: 80,
      image: meatImage
    },

    {
      name: 'Cheese',
      price: 50,
      image: cheeseImage
    },

    {
      name: 'Salad',
      price: 10,
      image: saladImage
    },

    {
      name: 'Bacon',
      price: 60,
      image: baconImage
    }
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},

  ]);

  const [userIngredients, setUserIngredients] = useState<string[]>([]);

  const ingredientAddition = (index: number) => {
    const copyIngredients = [...ingredients];
    const copyIngredient = copyIngredients[index];
    copyIngredient.count ++;
    copyIngredients[index] = copyIngredient;
    setIngredients(copyIngredients);

    if(userIngredients.length === 0) {
      userIngredients.push(copyIngredient.name);
      setUserIngredients(userIngredients);
    } else {
      const copyUserIngredients = [...userIngredients];
      copyUserIngredients.push(copyIngredient.name);
      setUserIngredients(copyUserIngredients);
    }

    console.log(userIngredients);
  };

  const ingredientRemoval = (index: number) => {
    if(ingredients[index].count > 0) {
      const copyIngredients = [...ingredients];
      const copyIngredient = copyIngredients[index];
      copyIngredient.count --;
      copyIngredients[index] = copyIngredient;
      setIngredients(copyIngredients);
    }

    if(userIngredients.length !== 0 && userIngredients[index] === ingredients[index].name) {
      const copyUserIngredients = [...userIngredients];
      copyUserIngredients.splice(copyUserIngredients.indexOf(copyUserIngredients[index]), 1);
      setUserIngredients(copyUserIngredients);
    }

    console.log(userIngredients);
  };

  return (
    <>
      <div className="main-block">
        <div>
          <h2>Ingredients</h2>
          {INGREDIENTS.map((ingredient, index) => (
            <div key={ingredient.name}>
              <button
                onClick={() => ingredientAddition(index)}
                className={`image-button ${ingredient.name}-img`}>
              </button>
              <p>{ingredient.name}: {ingredients[index].count}</p>
              <button onClick={() => ingredientRemoval(index)}>Remove</button>
              <hr/>
            </div>
          ))}
        </div>

        <div>
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {userIngredients.map((ingredient, index) => (
              <div key={index} className={ingredient}></div>
            ))}
            <div className="BreadBottom"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default App;
