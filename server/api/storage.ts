const KEY = 'my-extra-key'
const TEN_SECONDS = 1000 * 10
export default defineEventHandler(async (event) => {
  type SavedData = {
    createdAt: string // Timestamp
    data: {
      message: string
    }
  }
  const now = new Date()

  const possibleItem = await useStorage().getItem<SavedData>(KEY)
  const isValid = new Date(possibleItem?.createdAt || 0).getTime() > (now.getTime() - (TEN_SECONDS))
  if (possibleItem) {
    if (isValid) {
      return possibleItem
    }
  }

  const data: SavedData = {
    createdAt: now.toISOString(),
    data: {
      message: `Testing this useStorage() now: ${now}`
    }
  }

  await useStorage().setItem<SavedData>(KEY, data)
  return data
})