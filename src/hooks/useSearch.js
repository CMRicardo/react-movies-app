const APY_KEY = import.meta.env.VITE_API_KEY

export function useSearch ({ keyword, setMovies, pageNumber = 1, setLoading }) {
  setLoading(true)
  globalThis.fetch(`https://www.omdbapi.com/?s=${keyword}&page=${pageNumber}&apikey=${APY_KEY}`)
    .then(res => res.json())
    .then(response => setMovies(response.Search))
  setLoading(false)
}
