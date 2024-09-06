const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        green: "rgb(21, 160, 21)", // Define your custom color
      },
    },
  },
  plugins: [flowbite.plugin()],
};
