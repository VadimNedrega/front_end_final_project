
import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import { Footer, Header } from "../../components";
import "./orders.css";
import {ROUTE} from "../../router";
import { clearReduxStore } from "../../ducks"




export const OrderForm = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const [customerData, setCustomerData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        paymentType: 'Cash',
        notes: '',
        descriptionOfOrder: [],
        totalAmount: 0,
    });
//    const functionName = {name:`clear${config.storeUtility}`};
//    const functionName = window['clear'+config.storeUtility]();

    useEffect(() => {
        const keys = Object.keys(localStorage).filter(key => key.includes('cartData'));
        const items = keys.map(key => JSON.parse(localStorage.getItem(key)));
        setCartItems(items);

        const description = items.map(item => ({ ProductKey: item.productKey, Quantity: item.quantityCount }));
        setCustomerData(prevData => ({ ...prevData, descriptionOfOrder: description }));
    }, []);

    useEffect(() => {
        const sum = cartItems.reduce((acc, item) => acc + (item.quantityCount * parseInt(item.price)), 0);
        setTotalSum(sum);
        setCustomerData(prevData => ({ ...prevData, totalAmount: sum }));
    }, [cartItems]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customerData);
        alert(`Ваше замовлення на сумму ${customerData.totalAmount} прийнято в обробку`)

        setCustomerData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            paymentType: 'Cash',
            notes: '',
            descriptionOfOrder: [],
            totalAmount: 0,
        });
//        clearLocalStorage();
        clearReduxStore();
        navigate(ROUTE.HOME);
    };

    return (
        <div className="order">
            <Header/>
            <div className="order__table_container">
                <table className="order__table">
                    <thead>
                    <tr className="order__table_row">
                        <th className="order__table_product_key">Найменування</th>
                        <th className="order__table_quantity">Кількість</th>
                        <th>Ціна</th>
                        <th>Сума</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.productKey}</td>
                            <td>{item.quantityCount}</td>
                            <td>{item.price}</td>
                            <td>{parseInt(item.quantityCount) * parseInt(item.price)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="order__total_amount">
                Усього разом: {totalSum}
            </div>

                         <form className="order__form_input" onSubmit={handleSubmit}>
                             <input
                                className="order__form_input order__form_input_name"
                                type="text"
                                placeholder="Ім'я"
                                value={customerData.name}
                                onChange={(e) =>
                                    setCustomerData({ ...customerData, name: e.target.value })}
                            />
                            <input
                                className="order__form_input order__form_input_surname"
                                type="text"
                                placeholder="Прізвище"
                                value={customerData.surname}
                                onChange={(e) =>
                                    setCustomerData({ ...customerData, surname: e.target.value })}
                            />
                            <input
                                className="order__form_input order__form_input_email"
                                type="email"
                                placeholder="Email"
                                value={customerData.email}
                                onChange={(e) =>
                                    setCustomerData({ ...customerData, email: e.target.value })}
                            />
                            <input
                                className="order__form_input order__form_input_phone"
                                type="text"
                                placeholder="Телефон"
                                value={customerData.phone}
                                onChange={(e) =>
                                    setCustomerData({ ...customerData, phone: e.target.value })}
                            />
                            <div>
                                <label className="order__form_label">
                                    <input
                                        className="order__form_radio"
                                        type="radio"
                                        value="Cash"
                                        checked={customerData.paymentType === 'Cash'}
                                        onChange={(e) =>
                                            setCustomerData({ ...customerData, paymentType: e.target.value })}
                                    />
                                    Готівка
                                </label>
                                <label className="order__form_label">
                                    <input
                                        className="order__form_radio"
                                        type="radio"
                                        value="Credit card"
                                        checked={customerData.paymentType === 'Credit card'}
                                        onChange={(e) =>
                                            setCustomerData({ ...customerData, paymentType: e.target.value })}
                                    />
                                    Картка
                                </label>
                            </div>
                            <textarea
                                className="order__form_text"
                                placeholder="Примітки"
                                value={customerData.notes}
                                onChange={(e) =>
                                    setCustomerData({ ...customerData, notes: e.target.value })}
                            />
                            <button className="order__form_submit" type="submit">Замовити</button>
                        </form>

            {/*<button className="order__items_delete_btn" onClick={() => clearLocalStorage()}>*/}
            <button className="order__items_delete_btn" onClick={() => clearReduxStore()}>
                Clear
            </button>
            <Footer />
        </div>
    );
};

