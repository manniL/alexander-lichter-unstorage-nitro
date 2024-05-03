export default defineEventHandler(async (event) => {
  await useStorage('foobar').setItem('txt/my-file.txt', 'This is the test content')
})