import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Products } from '../pages/products';
import { Cart } from '../pages/cart'
import {Header, LoginForm, Footer, RegistrationForm} from "../components";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productKey" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<div>
                    <Header/>
                    <LoginForm/>
                    <Footer/>
                </div>} />
                <Route path="/registration" element={<div>
                    <Header/>
                    <RegistrationForm/>
                    <Footer/>
                </div>} />
            </Routes>
        </Router>
    );
};