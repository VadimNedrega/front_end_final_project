import React from 'react';

export const CartIcon = ({cartImageSrc}) => {
    const handleCartClick = () => {
        window.location.href = '/#';
    };

    return (
        <a href="/#" onClick={handleCartClick}>
            <img height={'24px'} width={'24px'} src={cartImageSrc} alt="Cart" className="cart-icon"/>
        </a>
    );
};


