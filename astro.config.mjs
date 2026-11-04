import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://LucaP28.github.io',
	base: '/studium-generale-website',
	integrations: [
		starlight({
			title: 'Studium Generale',
		}),
	],
});
