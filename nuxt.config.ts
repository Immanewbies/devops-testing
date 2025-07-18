// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils/module', '@nuxt/eslint'],
  typescript: {
        tsConfig: {
          compilerOptions: {
            types: ["vitest/globals"] // TypeScript support for Vitest globals
          }
        }
      }
})