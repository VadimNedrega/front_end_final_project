import React from "react";
import './ProductCard.css';
import { CardComponent } from "./CardComponent";

export const MainComponent = ({rangeOfProducts}) => {
  return (
      <div className="card__container">
          {rangeOfProducts.map((item, index) => (
              <CardComponent key={index} data={item} />
          ))}
      </div>
  )
}