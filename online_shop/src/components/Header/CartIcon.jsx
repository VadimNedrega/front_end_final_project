// import React from 'react';
//
// export const CartIcon = ({cartImageSrc}) => {
//     const handleCartClick = () => {
//         window.location.href = '/Cart';
//     };
//
//     return (
//         <a href="/Cart" onClick={handleCartClick}>
//             <img
//                 width="70px"
//                 height="auto"
//                 src={cartImageSrc}
//                 alt="Cart"
//                 className="cart-icon"
//             />
//         </a>
//     );
// };


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


