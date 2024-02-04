import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Products } from '../pages/products';
import { Cart } from '../pages/cart'
import {Header, LoginForm, Footer, RegistrationForm} from "../components";


export const ROUTE = {
    HOME: "/",
    PRODUCTS: "/products",
    PRODUCT_CURRENT: "/products/:productKey",
    CART: "/cart",
    LOGIN: "/login",
    REGISTRATION: "/registration",
};

// export const AppRouter = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<App />} />
//                 <Route path="/products" element={<Products />} />
//                 <Route path="/products/:productKey" element={<Products />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/login" element={<div>
//                     <Header/>
//                     <LoginForm/>
//                     <Footer/>
//                 </div>} />
//                 <Route path="/registration" element={<div>
//                     <Header/>
//                     <RegistrationForm/>
//                     <Footer/>
//                 </div>} />
//             </Routes>
//         </Router>
//     );
// };

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTE.HOME} element={<App />} />
                <Route path={ROUTE.PRODUCTS} element={<Products />} />
                <Route path={ROUTE.PRODUCT_CURRENT} element={<Products />} />
                <Route path={ROUTE.CART} element={<Cart />} />
                <Route
                    path={ROUTE.LOGIN}
                    element={
                        <div>
                            <Header />
                            <LoginForm />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path={ROUTE.REGISTRATION}
                    element={
                        <div>
                            <Header />
                            <RegistrationForm />
                            <Footer />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
};