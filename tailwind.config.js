/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'btn-gradient': 'linear-gradient(95.32deg, rgba(100, 30, 250, 0.37) 0%, rgba(239, 58, 255, 0.37) 114.79%), linear-gradient(0deg, rgba(255, 255, 255, 0.27), rgba(255, 255, 255, 0.27))',
        'contact-gradient': 'radial-gradient(62.5% 670.93% at 56.92% 62.5%, #351580 0%, #581C81 100%)'
      },
      backdropBlur: {
        'custom': '15.5734px'
      }, 
      colors:{
        ai:{
          white:{
            '40':'rgba(255, 255, 255, 0.04)',
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

