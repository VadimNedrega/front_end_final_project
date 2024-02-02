import React from "react";
import { Header }  from "./components"
import { Carousel } from './components';
import { Footer } from "./components";

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
    return (<div>
        <Header />
        <Carousel images={images} />
        <Footer />
    </div>)
}