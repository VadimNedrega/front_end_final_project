
import React, { useState, useEffect } from 'react';
import { Footer, Header } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import './cart.css';
import {ROUTE} from '../../router';
import { TdCart } from './TdCart';

export const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const productKey = queryParams.get('productKey');
    const price = queryParams.get('price');
    const image = queryParams.get('image');
    // eslint-disable-next-line
    const [quantityCount, setQuantityCount] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (productKey && quantityCount && price && image) {
            const cartData = {
                productKey,
                quantityCount,
                price,
                image,
            };
            localStorage.setItem(`cartData_${productKey}`, JSON.stringify(cartData));
        }
    }, [productKey, quantityCount, price, image]);

    useEffect(() => {
        const keys = Object.keys(localStorage).filter(key => key.includes('cartData'));
        const items = keys.map(key => JSON.parse(localStorage.getItem(key)));
        setCartItems(items);
    }, []);

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
                    {cartItems.map((item, index) => (
                        <TdCart
                            key={index}
                            productKey={item.productKey}
                            image={item.image}
                            price={item.price}
                            quantityCount={item.quantityCount}
                            setQuantityCount={quantity => {
                                const updatedItems = [...cartItems];
                                updatedItems[index].quantityCount = quantity;
                                setCartItems(updatedItems);
                            }}
                        />
                    ))}
                    </tbody>
                </table>
                <div className="cart__item_btn_group">
                    <button className="cart__item_btn"
                            onClick={() => navigate(ROUTE.HOME)}>
                        Повернутись до пошуку товарів
                    </button>
                    <button className="cart__item_btn"
                            onClick={() => localStorage.clear()}>
                        Оформити замовлення
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};




