import React from 'react';
import { App } from '../App';
import {createBrowserRouter,} from "react-router-dom";

import { Products } from '../pages/products';
import { Cart } from '../pages/cart'
import {Index} from "../pages/categories";
import {LoginForm} from "../pages/LoginForm";
import {RegistrationForm} from "../pages/RegistrationForm";
import {DeliveryPage} from "../pages/DeliveryPage";
import {WarrantyPage} from "../pages/WarrantyPage";
import {LoyaltyPage} from "../pages/LoyaltyPage";
import {GiftCardsPage} from "../pages/GiftCardsPage";
import {AboutPage} from "../pages/AboutPage";
import {ContactsPage} from "../pages/ContactsPage";
import {CareerPage} from "../pages/CareerPage";


export const ROUTE = {
    HOME: "/",
    CATEGORY_CURRENT: "/categories/:category",
    PRODUCTS: "/products",
    PRODUCT_CURRENT: "/products/:productKey",
    CART: "/cart",
    LOGIN: "/login",
    REGISTRATION: "/registration",
    DELIVERY: "/delivery",
    WARRANTY: "/warranty",
    LOYALTY: "/loyalty",
    GIFT_CARDS: "/giftCards",
    ABOUT: "/about",
    CONTACTS: "/contacts",
    CAREER: "/career",
};

export const router = createBrowserRouter([
    {path: ROUTE.HOME, element: <App />,},
    {path: ROUTE.CATEGORY_CURRENT, element: <Index />,},
    {path: ROUTE.PRODUCTS, element: <Products />,},
    {path: ROUTE.PRODUCT_CURRENT, element: <Products />,},
    {path: ROUTE.CART, element: <Cart />,},
    {path: ROUTE.LOGIN, element: <LoginForm />,},
    {path: ROUTE.REGISTRATION, element: <RegistrationForm />,},
    {path: ROUTE.DELIVERY, element: <DeliveryPage />,},
    {path: ROUTE.WARRANTY, element: <WarrantyPage />,},
    {path: ROUTE.LOYALTY, element: <LoyaltyPage />,},
    {path: ROUTE.GIFT_CARDS, element: <GiftCardsPage />,},
    {path: ROUTE.ABOUT, element: <AboutPage />,},
    {path: ROUTE.CONTACTS, element: <ContactsPage />,},
    {path: ROUTE.CAREER, element: <CareerPage />,},
]);





