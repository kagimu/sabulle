import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContentTemplate = () => {
    const { type, id } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch('/src/api/ecrin_bulle.json')
            .then(response => response.json())
            .then(data => {
                const contentData = data[type].find(item => item.id === parseInt(id));
                setContent(contentData);
            });
    }, [type, id]);

    if (!content) {
        return <div>Loading...</div>;
    }

    return (
        <section className="min-h-screen bg-[#ede4d5] py-12">
            
            <div className="container mx-auto p-4">
                
                
                <img src={content.image} alt={content.title} className="w-full max-h-[35rem] object-cover rounded-lg object-center mb-10" />
                <h1 className="text-4xl font-bold text-center mb-10 motion-preset-slide-left-md">{content.title}</h1>
                
                
                {content.content.map((section, index) => (
                    <div key={index} className="mb-4 max-w-3xl mx-auto motion-preset-slide-up-md">
                        <h2 className="text-2xl font-bold mb-4 text-center  ">{section.title}</h2>
                        {section.texts.map((text, idx) => (
                            <p key={idx} className="mb-2 text-gray-900 text-lg font-light">{text}</p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContentTemplate;