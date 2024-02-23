import React from "react";
import { Header }  from "./components"
import { Carousel } from './components';
import { Footer } from "./components";
import {images} from "./resources";
import Counter from "./components/Counter"

export function App () {

    return (<div>
        <Header />
        <Carousel images={images} />
        <Counter/>
        <Footer />
    </div>)
}
