import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Products } from '../pages/products';
import { Cart } from '../pages/cart'
import {LoginForm, RegistrationForm, DeliveryPage, WarrantyPage, LoyaltyPage, GiftCardsPage} from "../components";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productKey" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/registration" element={<RegistrationForm />} />
                <Route path="/delivery" element={<DeliveryPage />} />
                <Route path="/warranty" element={<WarrantyPage />} />
                <Route path="/loyalty" element={<LoyaltyPage />} />
                <Route path="/giftCards" element={<GiftCardsPage />} />
            </Routes>
        </Router>
    );
};