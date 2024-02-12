import React from 'react';

export const CartIcon = ({cartImageSrc}) => {
    const handleCartClick = () => {
        window.location.href = '/Cart';
    };

    return (
        <a href="/Cart" onClick={handleCartClick}>
            <img
                width="70px"
                height="auto"
                src={cartImageSrc}
                alt="Cart"
                className="cart-icon"
            />
        </a>
    );
};


