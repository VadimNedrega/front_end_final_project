import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../router';

export const CartIcon = ({ cartImageSrc }) => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate(ROUTE.CART);
    };

    return (
        <button className="cart-icon" onClick={handleCartClick}>
            <img
                width="70px"
                height="auto"
                src={cartImageSrc}
                alt="Cart"
            />
        </button>
    );
};


