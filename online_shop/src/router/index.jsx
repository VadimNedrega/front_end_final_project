// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { App } from '../App';
// import Products from "../pages/products";
//
//
// export const AppRouter = () => {
//
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<App />} />
//                 <Route
//                     path="/products" element={<Products />}
//                 />
//             </Routes>
//         </Router>
//     );
// };

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import Products from '../pages/products';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productKey" element={<Products />} />
            </Routes>
        </Router>
    );
};