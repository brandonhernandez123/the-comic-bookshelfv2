

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const COMIC_VINE_API = process.env.REACT_APP_COMIC_VINE_API

export const CHARACTER_COMIC_VINE = 'https://www.comicvine.com/api/characters?api_key='
export const format = '&format=json'
export const SingleCharacter = 'https://comicvine.gamespot.com/api/character/'
export const SearchbyIssue = 'https://www.comicvine.com/api/issues?api_key='
export const MARVEL_API = process.env.REACT_APP_MARVEL_API
export const MARVEL_COMIC_SEARCH = 'https://gateway.marvel.com:443/v1/public/comics?dateRange='
export const MARVEL_COMIC_SEARCH_NODATE = 'https://gateway.marvel.com:443/v1/public/comics?noVariants=true&title='
export const MARVEL_ORDERBY = '&orderBy=onsaleDate&limit=80&apikey='
