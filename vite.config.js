import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    cssCodeSplit:false
  },
  define:{
    "__production__": process.env.npm_lifecycle_event == "build"
  },
  plugins: [svelte()]
})
