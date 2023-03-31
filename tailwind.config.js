/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				"main-pattern": "url('/src/assets/peak_background.png')",
				"train-pattern": "url('/src/assets/train.jpeg')",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
