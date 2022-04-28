import './Movie.css'
export default function Movie ({ Title, Poster, Year }) {
  return (
    <li className='movie'>
      <h2>{Title}</h2>
      <img loading='lazy' src={Poster} alt={Title} />
      <span>{Year}</span>
    </li>
  )
}
