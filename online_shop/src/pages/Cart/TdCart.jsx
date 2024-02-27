
// import React, { useEffect } from 'react';
//
// export const TdCart = ({ productKey, image, price, quantityCount, setQuantityCount, onDelete}) => {
//
//     useEffect(() => {
//         const cartData = {
//             productKey,
//             quantityCount,
//             price,
//             image,
//         };
//         localStorage.setItem(`cartData_${productKey}`, JSON.stringify(cartData));
//     }, [productKey, quantityCount, price, image]);
//
//     return (
//         <tr className="cart__table_row">
//             <td className="cart__table_img">
//                 <img src={image} alt={productKey} />
//             </td>
//             <td className="cart__table_product_key">
//                 {productKey}
//             </td>
//             <td className="cart__table_product">
//                 <div className="cart__table_text">
//                     <button className="cart__table_quantity_btn"
//                             onClick={() => {
//                                 if (quantityCount > 1) {
//                                     setQuantityCount(quantityCount - 1);
//                                 }
//                             }}
//                     > -
//                     </button>
//                     <p>
//                         {quantityCount}
//                     </p>
//                     <button className="cart__table_quantity_btn"
//                             onClick={() => setQuantityCount(quantityCount + 1)}
//                     > +
//                     </button>
//                 </div>
//             </td>
//             <td className="cart__table_product_price">
//                 {price}
//             </td>
//             <td className="cart__table_product_total">
//                 {quantityCount * parseInt(price)}
//             </td>
//             <td className="cart__table_product_delete">
//                 <button className="cart__table_delete_btn"
//                         onClick={() => onDelete(productKey)}> Видалити
//                 </button>
//             </td>
//         </tr>
//     );
// };
//
//




// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import {saveCartItemToReduxStore} from "../../ducks";
//
//
// export const TdCart = ({ productKey, image, price, quantityCount, setQuantityCount, onDelete }) => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         const cartData = {
//             productKey,
//             quantityCount,
//             price,
//             image,
//         };
// //        saveCartItemToLocalStorage(productKey, cartData);
//         dispatch(saveCartItemToReduxStore(cartData));
// //    }, [dispatch, productKey, quantityCount, price, image]);
//     }, [dispatch]);
//     return (
//         <tr className="cart__table_row">
//             <td className="cart__table_img">
//                 <img src={image} alt={productKey} />
//             </td>
//             <td className="cart__table_product_key">
//                 {productKey}
//             </td>
//             <td className="cart__table_product">
//                 <div className="cart__table_text">
//                     <button className="cart__table_quantity_btn"
//                             onClick={() => {
//                                 if (quantityCount > 1) {
//                                     setQuantityCount(quantityCount - 1);
//                                 }
//                             }}
//                     > -
//                     </button>
//                     <p>
//                         {quantityCount}
//                     </p>
//                     <button className="cart__table_quantity_btn"
//                             onClick={() => setQuantityCount(quantityCount + 1)}
//                     > +
//                     </button>
//                 </div>
//             </td>
//             <td className="cart__table_product_price">
//                 {price}
//             </td>
//             <td className="cart__table_product_total">
//                 {quantityCount * parseInt(price)}
//             </td>
//             <td className="cart__table_product_delete">
//                 <button className="cart__table_delete_btn"
//                         onClick={() => onDelete(productKey)}> Delete
//                 </button>
//             </td>
//         </tr>
//     );
// };

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveCartItemToReduxStore } from "../../ducks";

export const TdCart = ({ productKey, image, price, quantityCount, setQuantityCount, onDelete }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const cartData = {
            productKey,
            quantityCount,
            price,
            image,
        };
        dispatch(saveCartItemToReduxStore(cartData));
    }, [dispatch, productKey, image, price, quantityCount]);
    return (
        <tr className="cart__table_row">
            <td className="cart__table_img">
                <img src={image} alt={productKey} />
            </td>
            <td className="cart__table_product_key">
                {productKey}
            </td>
            <td className="cart__table_product">
                <div className="cart__table_text">
                    <button className="cart__table_quantity_btn"
                            onClick={() => {
                                if (quantityCount > 1) {
                                    setQuantityCount(quantityCount - 1);
                                }
                            }}
                    > -
                    </button>
                    <p>
                        {quantityCount}
                    </p>
                    <button className="cart__table_quantity_btn"
                            onClick={() => setQuantityCount(quantityCount + 1)}
                    > +
                    </button>
                </div>
            </td>
            <td className="cart__table_product_price">
                {price}
            </td>
            <td className="cart__table_product_total">
                {quantityCount * parseInt(price)}
            </td>
            <td className="cart__table_product_delete">
                <button className="cart__table_delete_btn"
                        onClick={() => onDelete(productKey)}> Delete
                </button>
            </td>
        </tr>
    );
};
