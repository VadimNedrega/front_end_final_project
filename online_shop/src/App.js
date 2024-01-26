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

// =======
// import { Carousel } from './components/Carousel/Carousel.jsx'; //TODO cпросить в пн у сереги почему експорт не работает
//
// export function App () {
//         return (<div>
//             <Carousel />
//         </div>)
// }
// >>>>>>> 2820ebb0ff920f56732a9546b9c4de6ac71f1de0
