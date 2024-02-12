
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
    const [cartItems, setCartItems] = useState([]);
    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        if (productKey && price && image) {
            const cartData = {
                productKey,
                quantityCount: 1,
                price,
                image,
            };
            localStorage.setItem(`cartData_${productKey}`, JSON.stringify(cartData));
        }
    }, [productKey, price, image]);

    useEffect(() => {
        const keys = Object.keys(localStorage).filter(key => key.includes('cartData'));
        const items = keys.map(key => JSON.parse(localStorage.getItem(key)));
        setCartItems(items);
    }, []);

    useEffect(() => {
        const sum = cartItems.reduce((acc, item) => acc + (item.quantityCount * parseInt(item.price)), 0);
        setTotalSum(sum);
    }, [cartItems]);

    const handleDelete = (deletedProductKey) => {
        const updatedItems = cartItems.filter(item => item.productKey !== deletedProductKey);
        setCartItems(updatedItems);
        localStorage.removeItem(`cartData_${deletedProductKey}`);
    };


    return (
        <div>
            <Header />
            <div className="cart">
                <table className="cart__table">
                    <thead>
                    <tr className="cart__table_row">
                        <th>  </th>
                        <th className="cart__table_product_key">Найменування товару</th>
                        <th className="cart__table_quantity">Кількість</th>
                        <th>Ціна</th>
                        <th>Сума</th>
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
                            onDelete={handleDelete}
                        />
                    ))}
                    </tbody>
                </table>
                <div className="cart__table_total_amount">
                    Разом усі товари: {totalSum}
                </div>
                <div className="cart__item_btn_group">
                    <button className="cart__item_btn"
                            onClick={() => navigate(ROUTE.HOME)}>
                        Повернутись до пошуку товарів
                    </button>
                    <button className="cart__item_btn"
                            // onClick={() => localStorage.clear()}>
                            onClick={() => navigate(ROUTE.ORDER_FORM)}>
                        Оформити замовлення
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};




