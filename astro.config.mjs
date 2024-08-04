import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site:"https://www.xn--tlcharger1xbetlinebet-b5bb.com/",
  integrations: [tailwind(), react(), sitemap()]
});