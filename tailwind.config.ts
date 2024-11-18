import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: 'inherit', // Inherit the default browser font
			},
		}
	},

	plugins: []
} satisfies Config;
