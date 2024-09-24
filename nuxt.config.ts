// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    "@/styles/vars.css",
    "@/styles/main.css",
  ],
  app: {
    head: {
      title: "Test App",
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {rel: "preconnect", href: "https://fonts.googleapis.com"},
        {rel: "preconnect", href: "https://fonts.gstatic.com"},
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"},
      ],
    }
  },
})
