import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@design-atlas/svelte': '../../packages/svelte'
		}
	}
};

export default config;
