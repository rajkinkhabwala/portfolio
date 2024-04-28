import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: false,
  }), react()],
  output: "static",
  adapter: vercel()
});