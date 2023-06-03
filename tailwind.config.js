/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingImg': "url('/src/assets/glimere-landing-mobile.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ]
}