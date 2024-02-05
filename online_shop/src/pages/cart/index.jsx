import React, {useState} from 'react';
import { Footer, Header } from '../../components';
import { useLocation } from 'react-router-dom';
import './cart.css'

export const Cart = () => {

    const location = useLocation();
    const [quantityCount, setquantityCount] = useState(1);

    const queryParams = new URLSearchParams(location.search);
    const productKey = queryParams.get('productKey');
    const price = queryParams.get('price');
    const image = queryParams.get('image')

    return (
        <div >
            <Header />
            <div className="cart__item">
                <img className="cart__item_img" src={image} alt={productKey} />
                <div className="cart__item_text cart__item_product_key">
                    Product Key: {productKey}
                </div>
                <div className="cart__item_text cart__item_quantity">
                    <button
                        onClick={() => {
                            if (quantityCount > 1) {
                             setquantityCount(quantityCount - 1);
                            }
                        }}
                    > Зменшити
                    </button>
                    <p>
                        {quantityCount}
                    </p>
                    <button
                        onClick={() => setquantityCount(quantityCount + 1)}
                    > Збільшити
                    </button>
                </div>
                <div className="cart__item_text cart__item__price">
                    Price: {price}
                </div>
                <div className="cart__item_text cart__item_total">
                    Total: {quantityCount * parseInt(price)}
                </div>
                <button className="cart__item_delete_btn"> Видалити </button>
            </div>
            <Footer />
        </div>
    );
};

