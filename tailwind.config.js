/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from 'tailwindcss-motion';

export default {
    
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", 
        "./index.html", 
      ],
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
