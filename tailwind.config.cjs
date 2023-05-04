/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["sofia-pro", "sans-serif"]
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500'
    },
    extend: {
      colors: {
        gold: "#E9E8E3",
				gold2: "#8F8A72"
      },
    },
  },
  plugins: [],
};
