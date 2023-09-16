/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'second-color':"#314E52",
        'main-background':"#E7E6E1",
        'btn-color':"#D0B596",
      },
      fontFamily:{
        'font-awesome':"Font Awesome 5 Free",
      },
    },
    keyframes:{
      bounce:{
          '0%,100%':{transform:'rotate(-5deg)'},
          '50%': {transform:'rotate(5deg)'},
        },
    },
    animation:{
      bounceV2:'bounce 1s ease-in-out infinite alternate'
    }
  },
  plugins: [],
}

