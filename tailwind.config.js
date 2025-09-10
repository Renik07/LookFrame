module.exports = {
  darkMode: ["class"], // это важно для next-themes
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontSize: {
        base: '18px', // теперь text-base = 18px
      },
		},
  },
  plugins: [],
}