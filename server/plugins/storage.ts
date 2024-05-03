import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  const storage = useStorage()

  const runtimeConfig = useRuntimeConfig()
  const myRedisDriver = redisDriver({
    base: 'my-base',
    host: runtimeConfig.redis.host,
    password: ''
  })

  storage.mount('foobar', myRedisDriver)
}) 