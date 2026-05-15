import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS && !process.env.VERCEL ? "/all-star-barber-shop/" : "/",
});
