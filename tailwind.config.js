import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "rgb(6, 2, 2)",
        "custom-red": "rgb(137, 30, 47)",
        "custom-green": "#232D3F ",
        "main-red": "#008170",
        "second-red": "#005B41",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        tech: ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [scrollbar],
};
