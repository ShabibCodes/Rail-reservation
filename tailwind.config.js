/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"main-pattern": "url('/src/assets/peak_background.png')",
			},
		},
	},
	plugins: [],
};
