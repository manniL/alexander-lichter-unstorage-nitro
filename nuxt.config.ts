export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }
  },
  runtimeConfig: {
    redis: {
      host: '' //NUXT_REDIS_HOST -> another video (https://www.youtube.com/watch?v=_FYV5WfiWvs)
    }
  },
  nitro: {
    storage: {
      foobar: {
        driver: 'redis',
      }
    },
    devStorage: {
      foobar: {
        driver: 'memory',
      }
    }
  }
})