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
      name: 'Meat', // мясо
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

  console.log(INGREDIENTS);


  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},

  ]);

  const ingredientAddition = (index: number) => {
    setIngredients(prevState => prevState.map((ingredient, i) => {
        if (i === index) {
          return {
            ...ingredient,
            count: ingredient.count + 1
          };
        }
        return {...ingredient};
      })
    );

    console.log(ingredients[index]);
  };

  return (
    <>
      <div>
        <h2>Ingredients</h2>
        {INGREDIENTS.map((ingredient, index) => (
          <div key={ingredient.name}>
            <button onClick={() => ingredientAddition(index)}
                    className={`image-button ${ingredient.name}-img`}></button>
            <p>{ingredient.name}: {ingredients[index].count}</p>
            <p></p>
            <hr/>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
