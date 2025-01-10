import React from "react";
import "./Burger.css";

interface Props {
  userIngredients: string[];
}

const Burger: React.FC<Props> = ({ userIngredients }) => {
  return (
    <>
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
    </>
  );
};

export default Burger;
