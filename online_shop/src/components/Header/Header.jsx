
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import SearchForm from './SearchForm';
import AuthButtons from './AuthButtons';
import '../../resources/range_of_products';
import { rangeOfProducts } from '../../resources/range_of_products';

function Header() {
    const [categories, setCategories] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const categoriesArray = Object.keys(rangeOfProducts.categories);
        setCategories(categoriesArray);
    }, []);

    useEffect(() => {
        const handleMouseLeave = () => {
            setShowDropdown(false);
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

    const handleCategoryChange = (category) => {
        if (category !== 'Products') {
            const products = rangeOfProducts.categories[category]?.Products || [];
            console.log('Selected Category:', category);
            console.log(`Products of ${category}`, products);
        }

        setShowDropdown(false);
    };

    const handleListItemHover = (category) => {
        if (category !== 'Products') {
            const products = rangeOfProducts.categories[category]?.Products || [];
            console.log('Selected Category:', category);
            console.log(`Products of ${category}`, products);
        }
    };

    const handleLanguageChange = (language) => {
        console.log('Selected Language:', language);
    };

    const handleButtonHover = () => {
        setShowDropdown(true);
    };

    return (
        <div className="header bg-body-tertiary justify-content-between">

            <div className="custom-dropdown-container" ref={dropdownRef}>
                <button
                    className={`btn btn-secondary ${showDropdown ? 'active' : ''}`}
                    onMouseEnter={handleButtonHover}
                >
                    Products
                </button>
                {showDropdown && (
                    <div className="dropdown-list">
                        {categories.map((category) => (
                            <div
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                onMouseEnter={() => handleListItemHover(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="search-form-container">
                <SearchForm />
            </div>

            <div className="language-selector">
                <select onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="en">English</option>
                    <option value="ua">Ukraine</option>
                </select>
            </div>

            <div className="card-container">
                <h4> Card </h4>
            </div>

            <div className="auth-buttons-container">
                <AuthButtons />
            </div>

        </div>
    );
}

export default Header;





