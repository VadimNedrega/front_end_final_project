import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header, Carousel, Footer, LoginForm, RegistrationForm} from "./components"


export function App () {
    const images = [
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/001.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/002.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/003.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/004.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/005.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/006.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/007.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/008.jpg',
        'https://klassmarket.ua/image/catalog/data/home/home_slider/001/009.jpg',
        ];
    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Header/>
                                <Carousel images={images}/>
                                <Footer/>
                            </div>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <div>
                                <Header/>
                                <LoginForm/>
                                <Footer/>
                            </div>
                        }
                    />
                    <Route
                        path="/registration"
                        element={
                            <div>
                                <Header/>
                                <RegistrationForm/>
                                <Footer/>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}