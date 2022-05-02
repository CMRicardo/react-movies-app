import { useContext } from 'react'
import Helmet from 'react-helmet'
import { Movie } from '../../components'
import { MoviesContext } from '../../context'

export function Details ({ params }) {
  const { movies } = useContext(MoviesContext)
  const [movieToUse] = movies.filter((movie) => movie.imdbID === params.id)

  return (
    <>
      <Helmet>
        <title>Movies app | Details about {movieToUse.Title}</title>
        <meta name='description' content={`Movie details about ${movieToUse.Title}`} />
      </Helmet>
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
