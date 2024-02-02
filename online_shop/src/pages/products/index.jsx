
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { rangeOfProducts } from '../../resources/range_of_products';
import './products.css';

export const Products = () => {
    const { productKey } = useParams();
    const navigate = useNavigate();
    const productDetails = getProductDetails(productKey);

    if (!productDetails) {
        return (
            <div>
                <Header />
                <p>Product not found</p>
                <Footer />
            </div>
        );
    }

    const { image, ItemCharacteristics, Price } = productDetails;

    return (
        <div>
            <Header />
            <div className="product-details">
                <div className="product-image">
                    <img src={image} alt={productKey} />
                </div>
                <div className="product-info">
                    <h2>{productKey}</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Characteristics</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(ItemCharacteristics).map(([characteristic, value]) => (
                            <tr key={characteristic}>
                                <td>{characteristic}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <p>Price: {Price}</p>
                    <div className="product-buttons">
                        <button className="btn-common btn-primary btn-item"
                                onClick={() => navigate('/')}>Home
                        </button>
                        <button className="btn-common btn-third btn-item"
                                onClick={() => navigate('/cart')}>Cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const getProductDetails = (productKey) => {
    const categories = Object.values(rangeOfProducts.categories);
    for (const category of categories) {
        const products = category.Products;
        if (products && productKey in products) {
            return products[productKey];
        }
    }
    return null;
};


