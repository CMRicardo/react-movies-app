import { Movie } from '../index'
import './Movies.css'

export function Movies ({ movies }) {
  return (
    <>
      <ul className='movies-container'>
        {
          movies.length > 0 &&
          movies.map((movie) => {
            return (
              <Movie
                id={movie.imdbID}
                key={movie.imdbID}
                Title={movie.Title}
                Poster={movie.Poster}
                Year={movie.Year}
              />
            )
          })
        }
      </ul>
      <div className='intersection' />
    </>
  )
}
