/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'btn-gradient': 'linear-gradient(95.32deg, rgba(100, 30, 250, 0.37) 0%, rgba(239, 58, 255, 0.37) 114.79%), linear-gradient(0deg, rgba(255, 255, 255, 0.27), rgba(255, 255, 255, 0.27))',
        'contact-gradient': 'radial-gradient(62.5% 670.93% at 56.92% 62.5%, #351580 0%, #581C81 100%)',
        "hero-bg": "linear-gradient(180deg, rgba(6, 3, 36, 0) 77.35%, rgba(5, 2, 28, 0.15) 77.35%, #05021C 100%)",
        "btn-gradient-res" : "linear-gradient(95.32deg, #290D5E 0%, #331488 0.01%, #571C8B 114.79%)"

      },
      backdropBlur: {
        'custom': '15.5734px'
      }, 
      colors:{
        ai:{
          white:{
            '40':'rgba(255, 255, 255, 0.04)',
            '150':'rgba(255, 255, 255, 0.15)',
            '200':'rgba(255, 255, 255, 0.2)',
            '300':'rgba(255, 255, 255, 0.3)', 
            '450':'rgba(255, 255, 255, 0.45)', 
          },
          'custom-blue':"#05021C",
          'custom-purple': 'rgba(81, 27, 129, 1)',
          'pink-blur':'rgba(219, 0, 255, 0.43)',
          'blue-blur':'rgba(36, 0, 255, 0.36)',
        }
      },
      fontSize:{
        '40':['40px' , '48px'],
        '53':['53px' , '60px']
      },
      padding:{
        '22':'90px'
      },
      blur: {
        'pink': '160.183px'
      }


    },
  },
  plugins: [],
}

