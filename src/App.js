import React from "react";
import About from "./components/about/About";
import Intro from "./components/introduction/Intro";

const App = () => {
    return (
        <div className="main">
            <Intro />
            <About />
        </div>
    );
};

export default App;
