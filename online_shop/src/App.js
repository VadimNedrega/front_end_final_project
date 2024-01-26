import React from "react";

import Header  from "./components/Header/Header"
import {Carousel}  from "./components/Carousel/Carousel"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <h1>{"Our Final Project"}</h1>
    <Carousel />
            </div>
        )
    }
}

export default App;


