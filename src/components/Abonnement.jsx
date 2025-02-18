import React from "react";
import PricingCardWithFeatures from "./small_comp/PricingCardWithFeatures";

const Abonnement = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/src/assets/video_hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center">
       <h2 className="text-5xl   text-white text center motion-duration-[2s] motion-blur-in-md motion-translate-y-in-75 drop-shadow-lg mb-24">
            Rejoignez l'Élite : Le Cercle Prestigieux 
            <span className=" relative inline-block text-6xl font-bold ml-2 motion-delay-300 motion-preset-pop 
            motion-translate-y-in-150 text-transparent bg-gradient-to-br  bg-clip-text from-[#c5a888]  to-orange-200">
                Le Club
            </span>
        </h2>
            
        
        

        <PricingCardWithFeatures />
      </div>
    </div>
  );
};

export default Abonnement;