/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        highlight: "rgba(233, 237, 179)",
        "highlight-light-green": "#22ffda",
        "highlight-green": "rgba(50, 200, 160)",
        "highlight-red": "rgba(217, 56, 69)"
      },
      transitionTimingFunction: {
        "in-out-quint": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      fontFamily: {
        "custom-heavy": ["Just Dance Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
