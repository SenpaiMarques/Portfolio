module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Poppins',
      tertiary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#0AB3AC',
        background: '#101010',
      },
      backgroundImage: {
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },

      
    },
  },
  plugins: [],
};
