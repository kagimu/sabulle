import React from 'react';


const Card = ({title,description,svg,className}) => {
  return (
    
      <div className={` transition-all duration-300 hover:scale-110 rounded-2xl bg-white/40  xl:w-[28rem] xl:h-[16rem]  shadow-lg border p-6 
      cursor-pointer intersect-once motion-duration-[2s] intersect:motion-preset-slide-up ${className}  `}>
        <div className=" flex flex-col items-center" >
            <div className="flex items-center gap-6 mb-4">
            {svg}
            <h1 className='text-4xl py-4 text-center drop-shadow-md  text-transparent bg-gradient-to-br bg-clip-text from-[#c5a888]  to-orange-200 font-bold '>{title}</h1>
            </div>
            <div className='px-6 xl:text-center'>
            <p className='text-xl text-gray-600 '>{description}</p>
            </div>
            
        </div>
        

      </div>
    
  );
}



export default Card;
