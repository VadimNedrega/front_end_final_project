import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import {DropDownMenu} from './DropDownMenu';
import {SearchForm} from './SearchForm';
import {AuthButtons} from './AuthButtons';
import {CartIcon} from './CartIcon';
import {rangeOfProducts} from '../../resources';


export function Header() {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const categoriesArray = Object.keys(rangeOfProducts.categories);
        setCategories(categoriesArray);
    }, []);

    const handleLanguageChange = (language) => {
        console.log('Selected Language:', language);
    };

    const cartImageSource = "./shopping-Cart.png";

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






