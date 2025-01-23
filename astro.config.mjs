import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://charlesvillard.co/",
  integrations: [
    preact(),
    mdx(),
    sitemap(),
    icon({
      include: {
        mdi: ['twitter', 'linkedin', 'github'],
        simpleicon: ['bluesky']
      }
    })
  ],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});