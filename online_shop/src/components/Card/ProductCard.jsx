import React from "react";
import './ProductCard.css';
import { rangeOfProducts } from "../../resources/range_of_products";

export function ProductCard(props) {
    const {img, description, formPrice} = props;

    return (
            <div className="product__card" href="#">
                <img className="product__card-image" src={img} alt="test"/>
                <p className="product__card-description">{description}</p>
                <p className="product__card-price">{formPrice}</p>
                <button className="btn__buy">Купити</button>
            </div>
    )
}