import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Products } from '../pages/products';
import { Cart } from '../pages/cart'
import {LoginForm, RegistrationForm, DeliveryPage, WarrantyPage, LoyaltyPage, GiftCardsPage} from "../components";


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

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTE.HOME} element={<App />} />
                <Route path={ROUTE.PRODUCTS} element={<Products />} />
                <Route path={ROUTE.PRODUCT_CURRENT} element={<Products />} />
                <Route path={ROUTE.CART} element={<Cart />} />
                <Route path={ROUTE.LOGIN} element={<LoginForm />} />
                <Route path={ROUTE.REGISTRATION} element={<RegistrationForm />} />
                <Route path={ROUTE.DELIVERY} element={<DeliveryPage />} />
                <Route path={ROUTE.WARRANTY} element={<WarrantyPage />} />
                <Route path={ROUTE.LOYALTY} element={<LoyaltyPage />} />
                <Route path={ROUTE.GIFTCARDS} element={<GiftCardsPage />} />
            </Routes>
        </Router>
    );
};