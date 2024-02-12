import React from 'react';
import { App } from '../App';
import { Products, Cart, OrderForm } from '../pages';
import {LoginForm, RegistrationForm, DeliveryPage, WarrantyPage, LoyaltyPage, GiftCardsPage} from "../components";

import {createBrowserRouter,} from "react-router-dom";
import {Index} from "../pages";


export const ROUTE = {
    HOME: "/",
    CATEGORY_CURRENT: "/categories/:category",
    PRODUCTS: "/products",
    PRODUCT_CURRENT: "/products/:productKey",
    CART: "/cart",
    ORDER_FORM: "/order_form",
    LOGIN: "/login",
    REGISTRATION: "/registration",
    DELIVERY: "/delivery",
    WARRANTY: "/warranty",
    LOYALTY: "/loyalty",
    GIFTCARDS: "/giftCards",
};

export const router = createBrowserRouter([
    {path: ROUTE.HOME, element: <App />,},
    {path: ROUTE.CATEGORY_CURRENT, element: <Index />,},
    {path: ROUTE.PRODUCTS, element: <Products />,},
    {path: ROUTE.PRODUCT_CURRENT, element: <Products />,},
    {path: ROUTE.CART, element: <Cart />,},
    {path: ROUTE.ORDER_FORM, element: <OrderForm />,},
    {path: ROUTE.LOGIN, element: <LoginForm />,},
    {path: ROUTE.REGISTRATION, element: <RegistrationForm />,},
    {path: ROUTE.DELIVERY, element: <DeliveryPage />,},
    {path: ROUTE.WARRANTY, element: <WarrantyPage />,},
    {path: ROUTE.LOYALTY, element: <LoyaltyPage />,},
    {path: ROUTE.GIFTCARDS, element: <GiftCardsPage />,},
]);





