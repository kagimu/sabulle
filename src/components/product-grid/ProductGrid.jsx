import React, { useState, useEffect } from "react";
import ProductCounter from "./ProductCounter";
import ProductFiltering from "./ProductFiltering";
import ProductSorting from "./ProductSorting";
function ProductGrid({ category }) {
    const [products, setProducts] = useState([]);  // Use an array for products
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("price-asc");
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`/api/products?category=${category}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);


    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleSortChange = (newSort) => {
        setSort(newSort);
    };

    const filteredProducts = products.filter((product) => {
        if (filter === "all") return true;
        if (filter === "in-stock") return product.stock > 0;
        if (filter === "out-of-stock") return product.stock === 0;
        if (filter === "low-stock") return product.stock < 10;
        if (filter === "high-stock") return product.stock >= 10;
        return true;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "name-asc") return a.name.localeCompare(b.name);
        if (sort === "name-desc") return b.name.localeCompare(a.name);
        return 0;
    });

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;
    if (products.length === 0) return <p>Aucun produit disponible.</p>;

    return (
        <div className="flex bg-[#ede4d5] flex-col items-center">
            <div className="flex max-w-7xl justify-between w-full px-4">
                <ProductFiltering onFilterChange={handleFilterChange} />
                <ProductSorting onSortChange={handleSortChange} />
                <ProductCounter count={sortedProducts.length} />
            </div>

            <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl mx-auto py-4 px-4">
                {sortedProducts.map((product) => (
                    <div key={product.id} className="product-container p-4 border border-gray-500 rounded-2xl shadow max-w-80 motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md">
                        <div className="flex justify-center mb-4">
                            <img src={product.image_url} alt={product.name} className="w-48 h-48" />
                        </div>
                        <h1 className="text-xl font-bold">{product.name}</h1>
                        <p>{product.description}</p>
                        <p>Prix : {product.price} €</p>
                        <p>Stock : {product.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;