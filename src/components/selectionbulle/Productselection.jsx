import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  { id: 1, name: "CIGARETTE ELECTRONIQUE", image: "/selection/electronique.webp", url: "E-LIQUIDE" },
  { id: 2, name: "E-LIQUIDE", image: "/selection/liquide.webp", url: "E-LIQUIDE" },
  { id: 3, name: "E-LIQUIDE CBD", image: "/selection/liquidecbd.webp", url: "E-LIQUIDE"},
  { id: 4, name: "SELECTION DE FLEURS CBD", image: "/selection/hashcbd.webp", url: "E-LIQUIDE" },
  { id: 5, name: "SELECTION DE HASH CBD", image: "/selection/electronique.webp",url: "E-LIQUIDE" },
  { id: 6, name: "GUMMIES", image: "/selection/gummies.webp", url: "E-LIQUIDE" },
];

const Productselection = () => {
  return (
    <div className="max-w-8xl mx-auto py-10 flex justify-center items-center  ">
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
        className=" p-10 flex items-center justify-center"
      >
        {products.map((product, index) => (
             <SwiperSlide key={index} className="flex items-center justify-center intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:motion-translate-y-in-50">
                <div className="hover:scale-110 transition duration-300 rounded-2xl bg-white/40 w-64 h-80 shadow-lg border p-8 ">
                    <div className="flex flex-col items-center h-full gap-4">
                        <div className="flex items-center  mb-4">
                            <img className="w-[200px] h-[200px]" src={product.image} alt={product.name} />
                            
                            </div>
                            <div className='px-8 '>
                            <a href={product.url} className='inline-block text-md drop-shadow-md text-transparent bg-gradient-to-br bg-clip-text from-[#c5a888] to-orange-200 font-bold cursor-pointer border-b border-transparent hover:border-[#c5a888] hover:-translate-y-2 transition-all'>
                                {product.name}
                            </a>

                        </div>
                    </div>
                </div>
           </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};

export default Productselection;

