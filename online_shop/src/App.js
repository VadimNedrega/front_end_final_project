import React from "react";
import { Carousel } from './components/Carousel/Carousel.jsx'; //TODO cпросить в пн у сереги почему експорт не работает
import { Footer } from "./components";

export function App () {
        return (<div>
            <Carousel />
            <h1>Footer</h1>
            <Footer/>
        </div>)
}