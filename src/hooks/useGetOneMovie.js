const API_KEY = import.meta.env.VITE_API_KEY

export function useGetOneMovie ({ id }) {
  return globalThis
    .fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(res => res.json())
    .then(fromApiResponseToMovie)
}

const fromApiResponseToMovie = (apiResponse) => {
  const { Title, Year, Rated, Genre, Plot, Poster, imdbID } = apiResponse
  return { Title, Year, Rated, Genre, Plot, Poster, imdbID }
}
