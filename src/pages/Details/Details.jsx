import { useContext } from 'react'
import { Movie } from '../../components'
import { MoviesContext } from '../../context'

export function Details ({ params }) {
  const { movies } = useContext(MoviesContext)
  const [movieToUse] = movies.filter((movie) => movie.imdbID === params.id)

  return (
    <>
      <div className='movies-container'>
        <Movie
          id={movieToUse.imdbID}
          Poster={movieToUse.Poster}
          Title={movieToUse.Title}
          Year={movieToUse.Year}
        />
      </div>
    </>
  )
}
