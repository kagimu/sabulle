/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from 'tailwindcss-motion';

export default {
    
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
        },
        
        
    },
    plugins: [require('tailwindcss-motion'),
        require('tailwindcss-intersect') ,
    ], 
    
    

    


    
      
};
