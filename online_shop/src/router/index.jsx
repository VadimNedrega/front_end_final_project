import React from 'react';
import { App } from '../App';
import { Products } from '../pages/products';
import { Cart } from '../pages/cart'
import {LoginForm, RegistrationForm, DeliveryPage, WarrantyPage, LoyaltyPage, GiftCardsPage} from "../components";


import {createBrowserRouter,} from "react-router-dom";


export const ROUTE = {
    HOME: "/",
    PRODUCTS: "/products",
    PRODUCT_CURRENT: "/products/:productKey",
    CART: "/cart",
    LOGIN: "/login",
    REGISTRATION: "/registration",
    DELIVERY: "/delivery",
    WARRANTY: "/warranty",
    LOYALTY: "/loyalty",
    GIFTCARDS: "/giftCards",
};

export const router = createBrowserRouter([
    {path: ROUTE.HOME, element: <App />,},
    {path: ROUTE.PRODUCTS, element: <Products />,},
    {path: ROUTE.PRODUCT_CURRENT, element: <Products />,},
    {path: ROUTE.CART, element: <Cart />,},
    {path: ROUTE.LOGIN, element: <LoginForm />,},
    {path: ROUTE.REGISTRATION, element: <RegistrationForm />,},
    {path: ROUTE.DELIVERY, element: <DeliveryPage />,},
    {path: ROUTE.WARRANTY, element: <WarrantyPage />,},
    {path: ROUTE.LOYALTY, element: <LoyaltyPage />,},
    {path: ROUTE.GIFTCARDS, element: <GiftCardsPage />,},
]);





