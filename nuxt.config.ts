// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },

  modules: ["@nuxt/content"],
});
