import React from "react";
import About from "./components/about/About";
import Intro from "./components/introduction/Intro";
import ProductList from "./components/product/ProductList";

const App = () => {
    return (
        <div className="main">
            <Intro />
            <About />
            <ProductList />
        </div>
    );
};

export default App;
