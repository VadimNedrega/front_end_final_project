
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import {SearchForm} from './SearchForm';
import {AuthButtons} from './AuthButtons';
import {CartIcon} from './CartIcon';
import { rangeOfProducts } from '../../resources/range_of_products';


export function Header() {
    const [categories, setCategories] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const [hoveredCategory, setHoveredCategory] = useState('');
    const [hoveredProducts, setHoveredProducts] = useState({});


    useEffect(() => {
        const categoriesArray = Object.keys(rangeOfProducts.categories);
        setCategories(categoriesArray);
    }, []);

    useEffect(() => {
        const handleMouseLeave = () => {
            setShowDropdown(false);
            setHoveredCategory('');
            setHoveredProducts({});
        };

        const refCurrent = dropdownRef.current;

        if (refCurrent) {
            refCurrent.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (refCurrent) {
                refCurrent.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [dropdownRef]);


    const handleListItemHover = (category) => {
        if (category !== 'Products') {
            const products = rangeOfProducts.categories[category]?.Products || {};
            console.log('Selected Category:', category);
            setHoveredCategory(category);
            setHoveredProducts(products);
        }
    };

    const handleCurrentItemHover = (productKey) => {
        console.log(productKey);
    }

    const handleLanguageChange = (language) => {
        console.log('Selected Language:', language);
    };

    const handleButtonHover = () => {
        setShowDropdown(true);
    };

    const cartImageSource = 'cart.png';

    return (
        <div className="header bg-body-tertiary justify-content-between">

            <div className="custom-dropdown-container" ref={dropdownRef}>
                <button
                    className={`btn btn-common btn-secondary ${showDropdown ? 'active' : ''}`}
                    onMouseEnter={handleButtonHover}
                >
                    Products
                </button>
                {showDropdown && (
                    <div className="dropdown-list">
                        {categories.map((category) => (
                            <div
                                key={category}
                                onMouseEnter={() => handleListItemHover(category)}
                            >
                                {category}
                            </div>
                        ))}
                        {hoveredCategory !== '' && (
                            <div className="product-list">
                                {Object.keys(hoveredProducts).map((productKey) => (
                                <div
                                    key={productKey}
                                    onClick={() => handleCurrentItemHover(productKey)}
                                >
                                    {productKey}</div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="search-form-container">
                <SearchForm />
            </div>

            <div className="localisation-container">
                <select onChange={(event) => handleLanguageChange(event.target.value)}>
                    <option value="en">English</option>
                    <option value="ua">Ukraine</option>
                </select>
            </div>

            <div className="cart-container">
                <CartIcon cartImageSrc={cartImageSource} />
            </div>

            <div className="auth-buttons-container">
                <AuthButtons />
            </div>

        </div>
    );
}






