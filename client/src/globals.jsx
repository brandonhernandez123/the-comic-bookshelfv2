

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const COMIC_VINE_API = 'c55d019a55254a9ebd48ffa6bf63220facededb9'
export const CHARACTER_COMIC_VINE = 'https://www.comicvine.com/api/characters?api_key='
export const format = '&format=json'
export const SingleCharacter = 'https://comicvine.gamespot.com/api/character/'