import React from "react";

const ProductSorting = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <div className="product-sorting">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                {/* Add more sorting options as needed */}
            </select>
        </div>
    );
};

export default ProductSorting;