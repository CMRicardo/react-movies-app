export function useSearch ({ keyword }) {
  return globalThis.fetch(`https://www.omdbapi.com/?s=${keyword}&apikey=${import.meta.env.VITE_API_KEY}`)
    .then(res => res.json())
    .then(response => {
      return response.Search
    })
}
