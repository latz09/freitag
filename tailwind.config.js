/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
		colors: {
			
			primary: '#DDAA44',
			secondary: '#663F00',
			dark: '#150F04',
			light: '#FFF9EC',
		
			black: '#000000',
		},
		fontFamily: {
			tinos: ['Tinos', 'serif'],
			mulish: ['Mulish', 'sans-serif'],
			questrial: ['Questrial', 'sans-serif'],
			oswald: ['Oswald', 'sans-serif'],
		},
	},
	plugins: [],
};
