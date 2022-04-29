export function useSearch ({ keyword, setMovies, pageNumber = 1 }) {
  globalThis.fetch(`https://www.omdbapi.com/?s=${keyword}&page=${pageNumber}&apikey=${import.meta.env.VITE_API_KEY}`)
    .then(res => res.json())
    .then(response => setMovies(response.Search))
}
