import React from 'react';
import { useParams } from 'react-router-dom';
import { rangeOfProducts } from '../../resources';
import {Footer, Header} from "../../components";

export const Index = () => {
    const { category } = useParams();
    const categoryData = rangeOfProducts.categories[category];

    if (!categoryData) {
        return <p>Category not found</p>;
    }

    const products = Object.entries(categoryData.Products).map(([productKey, productData]) => ({
        productKey,
        ...productData
    }));

    return (
        <div>
            <Header />
            <h2>Category: {category}</h2>
            <ul>
                {products.map(product => (
                    <li key={product.productKey}>
                        <p>Product: {product.productKey}</p>
                        <p>Price: {product.Price}</p>
                        <p>Image: {product.image}</p>
                        <img src={product.image} alt={product.productKey} />
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

