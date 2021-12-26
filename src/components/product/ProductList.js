import React from "react";
import Product from "./Product";
import "./productList.css";

const ProductList = () => {
    return (
        <div className="product">
            <div className="product_texts">
                <h1 className="product__text__title">
                    Create & Inspire. It's Lama
                </h1>
                <p className="product__text__desc">
                    In the aad_process_ajax php function I have added all my
                    code that loads the xml file with simplexml_load_file and
                    loops trough it in a foreach loop, where I define all the
                    data needs to be insertet in the database, and it checks if
                    the products exists, updates them with new prices if they do
                    etc etc.
                </p>
            </div>
            <div className="product__list">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default ProductList;
