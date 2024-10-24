// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
    
//   },
//   plugins: [react()],
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     sourcemap: true
//   },
//   server: {
//     port: 5173,
//     proxy: {
//       '/socket.io': {
//         target: 'https://vpl-cricket-tournament-server.vercel.app',
//         changeOrigin: true,
//         ws: true
//       }
//     }
//   }
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 5173,
    proxy: {
      '/socket.io': {
        target: 'https://vpl-cricket-tournament-server.vercel.app', // Use your deployed server URL
        changeOrigin: true,
        ws: true // Enable WebSocket
      }
    }
  }
});
