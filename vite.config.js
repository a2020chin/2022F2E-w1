import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/2022F2E-w1/',
  plugins: [react(),
    VitePluginFonts({
      custom: {
        families: [{
          name: 'Cubic',
          local: 'Cubic',
          src: './public/fonts/Cubic_11_1.013_R.woff2',
        }],
        display: 'auto',
        preload: true,
      }
    })
  ],
})
