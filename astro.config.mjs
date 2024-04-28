import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: projectId,
    dataset: dataset,
    useCdn: false, // See note on using the CDN
    apiVersion: "2024-05-28", // insert the current date to access the latest version of the API
    studioBasePath: '/studio' // If you want to access the Studio on a route
  }), react()],
  output: "hybrid",
  adapter: vercel(),
});