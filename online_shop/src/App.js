import React from "react";

import {Header}  from "./components"
import {Carousel}  from "./components"

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Carousel />
            </div>
        )
    }
}




