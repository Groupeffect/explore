// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { 
      transformAssetUrls,
      compilerOptions: {
        delimiters: ["[[","]]"]
      }}}),

    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    vuetify({
      autoImport: true,
    }),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
    // TODO
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production'
        ? 'http://groupeffect.app/api'
        : 'http://localhost/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/media': {
        target: process.env.NODE_ENV === 'production'
        ? 'http://groupeffect.app/'
        : 'http://localhost/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/static': {
        target: process.env.NODE_ENV === 'production'
        ? 'http://groupeffect.app/'
        : 'http://localhost/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  build: {
    // outDir: "/app/backend/static",
    outDir: "../docs"
  },
  base: 
  process.env.NODE_ENV === 'production'
    ? '/explore/'
    : '/'
})
