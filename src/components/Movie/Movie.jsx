import { Link } from 'wouter'
import './Movie.css'
export function Movie ({ Title, Poster, Year, id }) {
  return (
    <li>
      <Link to={`/movie/${id}`}>
        <div className='movie'>
          <h2>{Title}</h2>
          <img loading='lazy' src={Poster} alt={Title} />
          <span>{Year}</span>
        </div>
      </Link>
    </li>
  )
}
