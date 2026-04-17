// svelte.config.js
import adapter from '@sveltejs/adapter-static'; // <-- Ubah baris ini (sebelumnya adapter-auto)
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build', // Folder hasil build
      assets: 'build',
      fallback: '404.html', // Penting untuk Github Pages
      precompress: false,
      strict: true
    }),
    
    // GANTI 'nama-repo-anda' DENGAN NAMA REPOSITORY GITHUB ANDA NANTI!
    // Contoh: jika repo bernama 'metech-web', maka tulis '/metech-web'
    // Jika Anda ingin menggunakannya sebagai halaman utama profil (username.github.io), kosongkan saja stringnya (paths: { base: '' })
    paths: {
        base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  }
};

export default config;