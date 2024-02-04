// import React, {useState, useEffect, useRef} from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Header.css';
// import {SearchForm} from './SearchForm';
// import {AuthButtons} from './AuthButtons';
// import {CartIcon} from './CartIcon';
// import {rangeOfProducts} from '../../resources/range_of_products';
//
//
// export function Header() {
//     const [categories, setCategories] = useState([]);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const dropdownRef = useRef(null);
//     const [hoveredCategory, setHoveredCategory] = useState('');
//     const [hoveredProducts, setHoveredProducts] = useState({});
//     const navigate = useNavigate();
//
//
//     useEffect(() => {
//         const categoriesArray = Object.keys(rangeOfProducts.categories);
//         setCategories(categoriesArray);
//     }, []);
//
//     useEffect(() => {
//         const handleMouseLeave = () => {
//             setShowDropdown(false);
//             setHoveredCategory('');
//             setHoveredProducts({});
//         };
//
//         const refCurrent = dropdownRef.current;
//
//         if (refCurrent) {
//             refCurrent.addEventListener('mouseleave', handleMouseLeave);
//         }
//
//         return () => {
//             if (refCurrent) {
//                 refCurrent.removeEventListener('mouseleave', handleMouseLeave);
//             }
//         };
//     }, [dropdownRef]);
//
//
//     const handleListItemHover = (category) => {
//         if (category !== 'Products') {
//             const products = rangeOfProducts.categories[category]?.Products || {};
//             console.log('Selected Category:', category);
//             setHoveredCategory(category);
//             setHoveredProducts(products);
//         }
//     };
//
//     const handleCurrentItemHover = (productKey) => {
//         console.log(productKey);
//         navigate(`/products/${productKey}`);
//     }
//
//     const handleLanguageChange = (language) => {
//         console.log('Selected Language:', language);
//     };
//
//     const handleButtonHover = () => {
//         setShowDropdown(true);
//     };
//
//     const handleHomeClick = () => {
//         navigate('/');
//     };
//
//     const cartImageSource = "./shopping-cart1.png";
//
//     return (
//         <div className="header">
//             <div className="header__dropdown_container" ref={dropdownRef}>
//                 <button
//                     className={`header__btn header__btn_home header__btn_secondary ${showDropdown ? 'active' : ''}`}
//                     onClick={handleHomeClick}
//                 >
//                     Головна
//                 </button>
//                 <button
//                     className={`header__btn header__btn_common header__btn_secondary ${showDropdown ? 'active' : ''}`}
//                     onMouseEnter={handleButtonHover}
//                 >
//                     Товари
//                 </button>
//                 {showDropdown && (
//                     <div className="header__dropdown_list">
//                         {categories.map((category) => (
//                             <div
//                                 key={category}
//                                 onMouseEnter={() => handleListItemHover(category)}
//                             >
//                                 {category}
//                             </div>
//                         ))}
//                         {hoveredCategory !== '' && (
//                             <div className="header__product_list">
//                                 {Object.keys(hoveredProducts).map((productKey) => (
//                                     <div
//                                         key={productKey}
//                                         onClick={() => handleCurrentItemHover(productKey)}
//                                     >
//                                         {productKey}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//             <div className="header__search_form">
//                 <SearchForm/>
//             </div>
//             <div className="header__localisation">
//                 <select onChange={(event) => handleLanguageChange(event.target.value)}>
//                     <option value="en">EN</option>
//                     <option value="ua">UA</option>
//                 </select>
//             </div>
//             <div className="header__cart">
//                 <CartIcon cartImageSrc={cartImageSource}/>
//             </div>
//             <div className="header__auth-buttons">
//                 <AuthButtons/>
//             </div>
//         </div>
//     );
// }


import React, {useState, useEffect} from 'react';
import './Header.css';
import {DropDownMenu} from './DropDownMenu';
import {SearchForm} from './SearchForm';
import {AuthButtons} from './AuthButtons';
import {CartIcon} from './CartIcon';
import {rangeOfProducts} from '../../resources/range_of_products';


export function Header() {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const categoriesArray = Object.keys(rangeOfProducts.categories);
        setCategories(categoriesArray);
    }, []);

    const handleLanguageChange = (language) => {
        console.log('Selected Language:', language);
    };

    const cartImageSource = "./shopping-cart1.png";

    return (
        <div className="header">
            <DropDownMenu categories={categories} />
            <div className="header__search_form">
                <SearchForm/>
            </div>
            <div className="header__localisation">
                <select onChange={(event) => handleLanguageChange(event.target.value)}>
                    <option value="en">EN</option>
                    <option value="ua">UA</option>
                </select>
            </div>
            <div className="header__cart">
                <CartIcon cartImageSrc={cartImageSource}/>
            </div>
            <div className="header__auth-buttons">
                <AuthButtons/>
            </div>
        </div>
    );
}





