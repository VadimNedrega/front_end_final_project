import React from "react";
import Header  from "./components/Header/Header"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <h1>{"Our Final Project"}</h1>
            </div>
        )
    }
}

export default App;