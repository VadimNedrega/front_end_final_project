import React from 'react';
import { useParams } from 'react-router-dom';
import {Footer, Header} from "../../components";

const Products = () => {
    const { productKey } = useParams();

    return (

        <div>
            <Header />
            <p>Product Details</p>
            <p>{productKey}</p>
            <Footer />
        </div>
    );
};

export default Products;