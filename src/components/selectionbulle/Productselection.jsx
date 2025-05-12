import React, { useState, useEffect } from "react"; // Ensure these are imported
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Productselection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const SUPABASE_BASE_URL = "https://wqhoutcnimidfrhbizgg.supabase.co/rest/v1/products";
        const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaG91dGNuaW1pZGZyaGJpemdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MTIzNjUsImV4cCI6MjA2MTQ4ODM2NX0.h9L_3jNHJYL1I_h4eftH2xz3ZAIqJppbRWenf-tTFPo";

        const response = await fetch(SUPABASE_BASE_URL, {
          headers: {
            Authorization: `Bearer ${SUPABASE_API_KEY}`,
            apikey: SUPABASE_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched products:", data); // Debugging: Log the fetched data
        setProducts(data); // Set fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-8xl mx-auto py-10 flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          140: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1424: { slidesPerView: 5 },
        }}
        className="p-10 flex items-center justify-center"
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:motion-translate-y-in-50"
            >
              <div className="hover:scale-110 transition duration-300 rounded-2xl bg-white/40 w-64 h-80 shadow-lg border p-8">
                <div className="flex flex-col items-center h-full gap-4">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-[200px] h-[200px]"
                      src={product.image_1 || "/placeholder.png"} // Fallback to a placeholder if no image
                      alt={product.nom || "Unnamed Product"} // Fallback if no name
                    />
                  </div>
                  <div className="px-8">
                    <a
                      href={product.url || "#"}
                      className="inline-block text-md drop-shadow-md text-transparent bg-gradient-to-br bg-clip-text from-[#c5a888] to-orange-200 font-bold cursor-pointer border-b border-transparent hover:border-[#c5a888] hover:-translate-y-2 transition-all"
                    >
                      {product.nom || "Unnamed Product"}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Swiper>
    </div>
  );
};

export default Productselection;
