
// import React, { useState, useEffect } from 'react';
// import { Footer, Header } from '../../components';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './cart.css';
// import {ROUTE} from '../../router';
// import { TdCart } from './TdCart';
//
// export const Cart = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const queryParams = new URLSearchParams(location.search);
//     const productKey = queryParams.get('productKey');
//     const price = queryParams.get('price');
//     const image = queryParams.get('image');
//     const [cartItems, setCartItems] = useState([]);
//     const [totalSum, setTotalSum] = useState(0);
//
//     useEffect(() => {
//         if (productKey && price && image) {
//             const cartData = {
//                 productKey,
//                 quantityCount: 1,
//                 price,
//                 image,
//             };
//             localStorage.setItem(`cartData_${productKey}`, JSON.stringify(cartData));
//         }
//     }, [productKey, price, image]);
//
//     useEffect(() => {
//         const keys = Object.keys(localStorage).filter(key => key.includes('cartData'));
//         const items = keys.map(key => JSON.parse(localStorage.getItem(key)));
//         setCartItems(items);
//     }, []);
//
//     useEffect(() => {
//         const sum = cartItems.reduce((acc, item) => acc + (item.quantityCount * parseInt(item.price)), 0);
//         setTotalSum(sum);
//     }, [cartItems]);
//
//     const handleDelete = (deletedProductKey) => {
//         const updatedItems = cartItems.filter(item => item.productKey !== deletedProductKey);
//         setCartItems(updatedItems);
//         localStorage.removeItem(`cartData_${deletedProductKey}`);
//     };
//
//
//     return (
//         <div>
//             <Header />
//             <div className="cart">
//                 <table className="cart__table">
//                     <thead>
//                     <tr className="cart__table_row">
//                         <th>  </th>
//                         <th className="cart__table_product_key">Найменування товару</th>
//                         <th className="cart__table_quantity">Кількість</th>
//                         <th>Ціна</th>
//                         <th>Сума</th>
//                         <th>  </th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {cartItems.map((item, index) => (
//                         <TdCart
//                             key={index}
//                             productKey={item.productKey}
//                             image={item.image}
//                             price={item.price}
//                             quantityCount={item.quantityCount}
//                             setQuantityCount={quantity => {
//                                 const updatedItems = [...cartItems];
//                                 updatedItems[index].quantityCount = quantity;
//                                 setCartItems(updatedItems);
//                             }}
//                             onDelete={handleDelete}
//                         />
//                     ))}
//                     </tbody>
//                 </table>
//                 <div className="cart__table_total_amount">
//                     Разом усі товари: {totalSum}
//                 </div>
//                 <div className="cart__item_btn_group">
//                     <button className="cart__item_btn"
//                             onClick={() => navigate(ROUTE.HOME)}>
//                         Повернутись до пошуку товарів
//                     </button>
//                     <button className="cart__item_btn"
//                             // onClick={() => localStorage.clear()}>
//                             onClick={() => navigate(ROUTE.ORDER_FORM)}>
//                         Оформити замовлення
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };



// import React, { useState, useEffect } from 'react';
// import { Footer, Header } from '../../components';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch,  useSelector} from 'react-redux';
// import './cart.css';
// import { ROUTE } from '../../router';
// import { TdCart } from './TdCart';
// //import {dataFunc} from './utils/universalDataUtils'
// import {config} from "../../resources";
// //import {saveCartItemToLocalStorage, getCartItemsFromLocalStorage, removeCartItemFromLocalStorage} from "./utils/localStorageUtils";
// import {saveCartItemToReduxStore, removeCartItemFromReduxStore, getCartItemsFromReduxStore,} from "../../ducks";
//
//
// const typeOfRepo = config.storeUtility;
//
// export const Cart = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const queryParams = new URLSearchParams(location.search);
//     const productKey = queryParams.get('productKey');
//     const price = queryParams.get('price');
//     const image = queryParams.get('image');
//     const [cartItems, setCartItems] = useState([]);
//     const [totalSum, setTotalSum] = useState(0);
//
//
//
//     useEffect(() => {
//         if (productKey && price && image) {
//             const cartData = {
//                 productKey,
//                 quantityCount: 1,
//                 price,
//                 image,
//             };
// //            saveCartItemToLocalStorage(productKey, cartData);
// //            dataFunc(typeOfRepo,'saveCartItem',[productKey, cartData]);
// //            dataFunc(typeOfRepo,'saveCartItem',[productKey,cartData]);
//             dispatch(saveCartItemToReduxStore(Object.values(cartData)));
//         }
//     }, [dispatch, productKey, price, image]);
//
//     useEffect(() => {
// //        const items = getCartItemsFromLocalStorage();
// //        const items = dataFunc(typeOfRepo,'getCartItems');
//         const items = dispatch(getCartItemsFromReduxStore());
//         setCartItems(items);
//     }, [dispatch]);
//
//     useEffect(() => {
//         const sum = cartItems.reduce((acc, item) => acc + (item.quantityCount * parseInt(item.price)), 0);
//         setTotalSum(sum);
//     }, [cartItems]);
//
//     const handleDelete = (deletedProductKey) => {
//         const updatedItems = cartItems.filter(item => item.productKey !== deletedProductKey);
//         setCartItems(updatedItems);
// //        removeCartItemFromLocalStorage(deletedProductKey);
// //        dataFunc(typeOfRepo,'removeCartItem', [deletedProductKey]);
//         dispatch(removeCartItemFromReduxStore(deletedProductKey));
//     };
//
//     return (
//         <div>
//             <Header />
//             <div className="cart">
//                 <table className="cart__table">
//                     <thead>
//                     <tr className="cart__table_row">
//                         <th>  </th>
//                         <th className="cart__table_product_key">Product Name</th>
//                         <th className="cart__table_quantity">Quantity</th>
//                         <th>Price</th>
//                         <th>Total</th>
//                         <th>  </th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {cartItems.map((item, index) => (
//                         <TdCart
//                             key={index}
//                             productKey={item.productKey}
//                             image={item.image}
//                             price={item.price}
//                             quantityCount={item.quantityCount}
//                             setQuantityCount={quantity => {
//                                 const updatedItems = [...cartItems];
//                                 updatedItems[index].quantityCount = quantity;
//                                 setCartItems(updatedItems);
//                             }}
//                             onDelete={handleDelete}
//                         />
//                     ))}
//                     </tbody>
//                 </table>
//                 <div className="cart__table_total_amount">
//                     Total: {totalSum}
//                 </div>
//                 <div className="cart__item_btn_group">
//                     <button className="cart__item_btn" onClick={() => navigate(ROUTE.HOME)}>
//                         Повернутись до пошуку товарів
//                     </button>
//                     <button className="cart__item_btn" onClick={() => navigate(ROUTE.ORDER_FORM)}>
//                         Оформити замовлення
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };




// import React, { useState, useEffect } from 'react';
// import { Footer, Header } from '../../components';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch,  useSelector} from 'react-redux';
// import './cart.css';
// import { ROUTE } from '../../router';
// import { TdCart } from './TdCart';
// import {saveCartItemToReduxStore, removeCartItemFromReduxStore, getCartItemsFromReduxStore,} from "../../ducks";
// //import {selectCounter} from "../../ducks/counter";
//
//
// export const Cart = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const queryParams = new URLSearchParams(location.search);
//     const productKey = queryParams.get('productKey');
//     const price = queryParams.get('price');
//     const image = queryParams.get('image');
//     const [cartItems, setCartItems] = useState([]);
//     const allItems = useSelector(state => state.cart.cartItems);
//     const [totalSum, setTotalSum] = useState(0);
//
//
//
//     useEffect(() => {
//         if (productKey && price && image) {
//             const cartData = {
//                 productKey,
//                 quantityCount: 1,
//                 price,
//                 image,
//             };
// //            saveCartItemToLocalStorage(productKey, cartData);
//             dispatch(saveCartItemToReduxStore(cartData));
//         }
//     }, [dispatch, productKey, price, image]);
// //    }, [dispatch]);
//     useEffect(() => {
// //        const items = getCartItemsFromLocalStorage();
// //        const items = dispatch(getCartItemsFromReduxStore());
//         const items = Object.values(allItems);
//         console.log(items);
//         setCartItems(items);
//     }, [dispatch]);
//
//     useEffect(() => {
//         const sum = cartItems.reduce((acc, item) => acc + (item.quantityCount * parseInt(item.price)), 0);
//         setTotalSum(sum);
//     }, [cartItems]);
//
//     const handleDelete = (deletedProductKey) => {
//         const updatedItems = cartItems.filter(item => item.productKey !== deletedProductKey);
//         setCartItems(updatedItems);
// //        removeCartItemFromLocalStorage(deletedProductKey);
//         dispatch(removeCartItemFromReduxStore(deletedProductKey));
//     };
//
//     return (
//         <div>
//             <Header />
//             <div className="cart">
//                 <table className="cart__table">
//                     <thead>
//                     <tr className="cart__table_row">
//                         <th>  </th>
//                         <th className="cart__table_product_key">Product Name</th>
//                         <th className="cart__table_quantity">Quantity</th>
//                         <th>Price</th>
//                         <th>Total</th>
//                         <th>  </th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {cartItems.map((item, index) => (
//                         <TdCart
//                             key={index}
//                             productKey={item.productKey}
//                             image={item.image}
//                             price={item.price}
//                             quantityCount={item.quantityCount}
//                             setQuantityCount={quantity => {
//                                 const updatedItems = [...cartItems];
//                                 updatedItems[index].quantityCount = quantity;
//                                 setCartItems(updatedItems);
//                             }}
//                             onDelete={handleDelete}
//                         />
//                     ))}
//                     </tbody>
//                 </table>
//                 <div className="cart__table_total_amount">
//                     Total: {totalSum}
//                 </div>
//                 <div className="cart__item_btn_group">
//                     <button className="cart__item_btn" onClick={() => navigate(ROUTE.HOME)}>
//                         Повернутись до пошуку товарів
//                     </button>
//                     <button className="cart__item_btn" onClick={() => navigate(ROUTE.ORDER_FORM)}>
//                         Оформити замовлення
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };




// import React, { useState, useEffect } from 'react';
// import { Footer, Header } from '../../components';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import './cart.css';
// import { ROUTE } from '../../router';
// import { TdCart } from './TdCart';
// import { saveCartItemToReduxStore, removeCartItemFromReduxStore } from "../../ducks";
//
// export const Cart = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const queryParams = new URLSearchParams(location.search);
//     const productKey = queryParams.get('productKey');
//     const price = queryParams.get('price');
//     const image = queryParams.get('image');
//     const [cartItems, setCartItems] = useState([]);
//     const [totalSum, setTotalSum] = useState(0);
//     const allItems = useSelector(state => state.cart.cartItems)
//
//     useEffect(() => {
//         if (productKey && price && image) {
//             const cartData = {
//                 productKey,
//                 quantityCount: 1,
//                 price,
//                 image,
//             };
//             dispatch(saveCartItemToReduxStore(cartData));
//         }
//     }, [dispatch, productKey, price, image]);
//
//     useEffect(() => {
//         const items = Object.values(allItems);
//         console.log(items);
//         setCartItems(items);
//     }, [dispatch]);
//
//     useEffect(() => {
//         const sum = cartItems.reduce((acc, item) => acc + (item.quantityCount * parseInt(item.price)), 0);
//         setTotalSum(sum);
//     }, [cartItems]);
//
//     const handleDelete = (deletedProductKey) => {
//         const updatedItems = cartItems.filter(item => item.productKey !== deletedProductKey);
//         setCartItems(updatedItems);
//         dispatch(removeCartItemFromReduxStore(deletedProductKey));
//     };
//
//     return (
//         <div>
//             <Header />
//             <div className="cart">
//                 <table className="cart__table">
//                     <thead>
//                     <tr className="cart__table_row">
//                         <th>  </th>
//                         <th className="cart__table_product_key">Product Name</th>
//                         <th className="cart__table_quantity">Quantity</th>
//                         <th>Price</th>
//                         <th>Total</th>
//                         <th>  </th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {cartItems.map((item, index) => (
//                         <TdCart
//                             key={index}
//                             productKey={item.productKey}
//                             image={item.image}
//                             price={item.price}
//                             quantityCount={item.quantityCount}
//                             setQuantityCount={quantity => {
//                                 const updatedItems = [...cartItems];
//                                 updatedItems[index].quantityCount = quantity;
//                                 setCartItems(updatedItems);
//                             }}
//                             onDelete={handleDelete}
//                         />
//                     ))}
//                     </tbody>
//                 </table>
//                 <div className="cart__table_total_amount">
//                     Total: {totalSum}
//                 </div>
//                 <div className="cart__item_btn_group">
//                     <button className="cart__item_btn" onClick={() => navigate(ROUTE.HOME)}>
//                         Повернутись до пошуку товарів
//                     </button>
//                     <button className="cart__item_btn" onClick={() => navigate(ROUTE.ORDER_FORM)}>
//                         Оформити замовлення
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };



import React, { useEffect } from 'react';
import { Footer, Header } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './cart.css';
import { ROUTE } from '../../router';
import { TdCart } from './TdCart';
import { saveCartItemToReduxStore, removeCartItemFromReduxStore } from "../../ducks";

export const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(location.search);
    const productKey = queryParams.get('productKey');
    const price = queryParams.get('price');
    const image = queryParams.get('image');
    const allItems = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        if (productKey && price && image) {
            const cartData = {
                productKey,
                quantityCount: 1,
                price,
                image,
            };
            dispatch(saveCartItemToReduxStore(cartData));
        }
    }, [dispatch, productKey, price, image]);

    useEffect(() => {
    }, [allItems]);

    const handleDelete = (deletedProductKey) => {
        dispatch(removeCartItemFromReduxStore(deletedProductKey));
    };

    return (
        <div>
            <Header />
            <div className="cart">
                <table className="cart__table">
                    <thead>
                    <tr className="cart__table_row">
                        <th></th>
                        <th className="cart__table_product_key">Product Name</th>
                        <th className="cart__table_quantity">Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {allItems.map((item, index) => (
                        <TdCart
                            key={index}
                            productKey={item.productKey}
                            image={item.image}
                            price={item.price}
                            quantityCount={item.quantityCount}
                            setQuantityCount={(quantity) => {
                            }}
                            onDelete={handleDelete}
                        />
                    ))}
                    </tbody>
                </table>
                <div className="cart__table_total_amount">
                    Total: {allItems.reduce((acc, item) => acc + (item.quantityCount * parseInt(item.price)), 0)}
                </div>
                <div className="cart__item_btn_group">
                    <button className="cart__item_btn" onClick={() => navigate(ROUTE.HOME)}>
                        Повернутись до пошуку товарів
                    </button>
                    <button className="cart__item_btn" onClick={() => navigate(ROUTE.ORDER_FORM)}>
                        Оформити замовлення
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
