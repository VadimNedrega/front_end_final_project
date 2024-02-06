
import React from 'react';
import { Footer, Header } from '../../components';
import { useLocation } from 'react-router-dom';
import './cart.css';
import TdCart from './TdCart';

export const Cart = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const productKey = queryParams.get('productKey');
    const price = queryParams.get('price');
    const image = queryParams.get('image');

    return (
        <div>
            <Header />
            <div className="cart__item">
                <table className="cart__table">
                    <thead>
                    <tr className="cart__item__row">
                        <th>  </th>
                        <th className="cart__item_product_key">Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>  </th>
                    </tr>
                    </thead>
                    <tbody>
                    <TdCart
                        productKey={productKey}
                        image={image}
                        qCount={1}
                        price={price}
                    />
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};



