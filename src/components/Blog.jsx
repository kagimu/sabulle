import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Blog = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/src/api/ecrin_bulle.json')
            .then(response => response.json())
            .then(data => setData(data.blog));
    }, []);

    const handleCardClick = (id) => {
        navigate(`/content/blog/${id}`);
    };

    return (
        <section className=" min-h-screen bg-[#ede4d5] ">
            <div className="container mx-auto p-4 bg-[#ede4d5] ">
            <h1 className="text-6xl font-bold my-12 text-center Joliet-font">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="card border rounded-lg shadow-lg p-8 cursor-pointer motion-preset-slide-up-sm hover:-translate-y-4 transition-transform"
                        onClick={() => handleCardClick(item.id)}
                        >
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                        <p className=' text-gray-900 font-bold mb-2'>{item.date}</p>
                        <p className=' text-gray-600'>{item.description}</p>
                    </div>
                ))}
                </div>
            </div>

        </section>
        
    );
};

export default Blog;