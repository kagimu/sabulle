import React from "react";

const ProductFiltering = ({ onFilterChange }) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className="product-filtering">
            <label htmlFor="filter">Filter by stock:</label>
            <select id="filter" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="low-stock">Low Stock (less than 10)</option>
                <option value="high-stock">High Stock (10 or more)</option>
            </select>
        </div>
    );
};

export default ProductFiltering;