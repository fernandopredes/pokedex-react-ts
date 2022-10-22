import { defineConfig } from 'vite'
/* import react from '@vitejs/plugin-react' */

// https://vitejs.dev/config/
export default defineConfig({
  /* 中略 */
  base: process.env.GITHUB_PAGES
    ? '/pokedex-react-ts/' // レポジトリ名を設定
    : './'
});
