import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { rangeOfProducts } from "../../resources/range_of_products";
import {ROUTE} from '../../router';

export function DropDownMenu({ categories }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const [hoveredCategory, setHoveredCategory] = useState("");
    const [hoveredProducts, setHoveredProducts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseLeave = () => {
            setShowDropdown(false);
            setHoveredCategory("");
            setHoveredProducts({});
        };

        const refCurrent = dropdownRef.current;

        if (refCurrent) {
            refCurrent.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (refCurrent) {
                refCurrent.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [dropdownRef]);

    const handleListItemHover = (category) => {
        if (category !== "Products") {
            const products =
                rangeOfProducts.categories[category]?.Products || {};
            console.log("Selected Category:", category);
            setHoveredCategory(category);
            setHoveredProducts(products);
        }
    };

    const handleCurrentItemHover = (productKey) => {
        console.log(productKey);
        navigate(`/products/${productKey}`);
    };

    const handleButtonHover = () => {
        setShowDropdown(true);
    };

    const handleHomeClick = () => {
        navigate(ROUTE.HOME);
    };

    return (
        <div className="header__dropdown_container" ref={dropdownRef}>
            <button
                className={`header__btn header__btn_home header__btn_secondary ${
                    showDropdown ? "active" : ""
                }`}
                onClick={handleHomeClick}
            >
                Головна
            </button>
            <button
                className={`header__btn header__btn_common header__btn_secondary ${
                    showDropdown ? "active" : ""
                }`}
                onMouseEnter={handleButtonHover}
            >
                Товари
            </button>
            {showDropdown && (
                <div className="header__dropdown_list">
                    {categories.map((category) => (
                        <div
                            key={category}
                            onMouseEnter={() => handleListItemHover(category)}
                        >
                            {category}
                        </div>
                    ))}
                    {hoveredCategory !== "" && (
                        <div className="header__product_list">
                            {Object.keys(hoveredProducts).map((productKey) => (
                                <div
                                    key={productKey}
                                    onClick={() => handleCurrentItemHover(productKey)}
                                >
                                    {productKey}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
