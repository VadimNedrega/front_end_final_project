import React from "react";
import './ProductCard.css';

export const CardComponent = ({data}) => {
    return (
        <div className="product__card">
            <h2>{data.Products}</h2>
            <p>{data.Price}</p>
        </div>
    )
}