import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import lightningcss from 'vite-plugin-lightningcss';

export default defineConfig({
	plugins: [sveltekit(), lightningcss()],
	resolve: {
		alias: {
			'@design-atlas/svelte': '../../packages/svelte'
		}
	}
});
