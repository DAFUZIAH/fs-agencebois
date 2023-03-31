/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'yellow': 'var(--yellow)',
      'grey': 'var(--grey)',
      'dark-color': 'var(--dark-color)',
    },
    extend: {
      boxShadow: {
        '3xl': '0 6px 25px 0 rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-home': "url('/img/divers/carnotzet-[desktop].webp')",
      },
      height: {
        'halfScreen': '50vh',
        'tierScreen': '75vh',
      },
      width: {
        'sm': '300px',
        'xl': '500px',
        '1/3': '30%',
      },
      maxWidth: {
        'tablet-layout': '900px',
        'desktop-layout': '1400px',
        '1/2': '50%',
        '3/4': '75%',
        '1/3': '30%',
        'icon': '180px',
        'icon-little': '90px',
      },
      maxHeight: {
        'img-wrapper': '600px',
        'item': '300px',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'postMd': '769px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
