import React from "react";

const ProductCounter = ({ count }) => {
    return (
        <div className="product-counter">
            <p>{count} produit</p>
        </div>
    );
};

export default ProductCounter;