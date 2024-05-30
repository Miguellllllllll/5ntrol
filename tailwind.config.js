/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        "mostaza":"#E0A737",
        "marron": "#4B3805",
        "marron_claro":"#A78D65",
        "color_fondo": "#FFF8E8",
        "color-titulo": "#402E32",
        "fondo-cards": "#FBD573"
      },
      fontFamily: {
        "anton-regular": "Anton",
        "shadow":"Shadows Into Light"
      },
      keyframes: {
        slide: {
          "0%":{ transform: "translateX(0)"},
          "20%": { transform: "translateX(0)"},
          "25%": { transform: "translateX(-20%)"},
          "45%": { transform: "translateX(-20%)"},
          "50%": { transform: "translateX(-40%)"},
          "70%": { transform: "translateX(-40%)"},
          "75%": { transform: "translateX(-60%)"},
          "95%": { transform: "translateX(-60%)"},
          "100%": { transform: "translateX(-90%)" },
        }

      },
      animation: {
        slide: "slide 20s infinite alternate-reverse",
      },
    }
      },

  plugins: [],
}

