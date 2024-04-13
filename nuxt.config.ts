// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css", "~/public/css/all.min.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Inter: "300..900",
      "Fira Code": "300..700",
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
