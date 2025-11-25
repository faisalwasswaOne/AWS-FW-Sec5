import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This is necessary to shim process.env for the browser environment
      // to comply with the required @google/genai usage
      'process.env': {
        API_KEY: JSON.stringify(env.API_KEY)
      }
    }
  }
})