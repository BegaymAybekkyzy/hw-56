import React from "react";

interface Props {
  totalPrice: number;
}

const Price: React.FC<Props> = ({ totalPrice }) => {
  return <>Total price: {totalPrice} som</>;
};

export default Price;
