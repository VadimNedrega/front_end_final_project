
import React, { useEffect } from 'react';

export const TdCart = ({ productKey, image, price, quantityCount, setQuantityCount }) => {

    useEffect(() => {
        const cartData = {
            productKey,
            quantityCount,
            price,
            image,
        };
        localStorage.setItem(`cartData_${productKey}`, JSON.stringify(cartData));
    }, [productKey, quantityCount, price, image]);

    return (
        <tr className="cart__item__row">
            <td className="cart__item_img">
                <img src={image} alt={productKey} />
            </td>
            <td className="cart__item_product_key">
                {productKey}
            </td>
            <td className="cart__item_product_quantity">
                <div className="cart__item_text cart__item_quantity">
                    <button className="cart__item_quantity_btn"
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
                    <button className="cart__item_quantity_btn"
                            onClick={() => setQuantityCount(quantityCount + 1)}
                    > +
                    </button>
                </div>
            </td>
            <td className="cart__item_product_price">
                {price}
            </td>
            <td className="cart__item_product_total">
                {quantityCount * parseInt(price)}
            </td>
            <td className="cart__item_product_delete">
                <button className="cart__item_delete_btn"> Видалити </button>
            </td>
        </tr>
    );
};

