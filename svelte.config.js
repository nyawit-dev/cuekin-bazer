import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    // BASE_PATH=/cuekin-bazer di GitHub Actions, kosong saat dev lokal
    paths: {
      base: process.env.BASE_PATH || ''
    }
  }
};

export default config;
