import { useEffect, useState } from 'react'
import { Movie, MovieDetails } from '../../components'

export function Details ({ params }) {
  const [singleMovie, setSingleMovie] = useState({})

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY
    globalThis
      .fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${params.id}`)
      .then(res => res.json())
      .then(setSingleMovie)
  }, [params.id])

  return (
    <>
      <div className='movies-container'>
        <Movie
          id={singleMovie.imdbID}
          Poster={singleMovie.Poster}
          Title={singleMovie.Title}
          Year={singleMovie.Year}
        />
        <MovieDetails {...singleMovie} />
      </div>
    </>
  )
}
