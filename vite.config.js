import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  test: {
    testTimeout: 10000,
    retry: 3,
    setupFiles: 'dotenv/config',
  },
});
