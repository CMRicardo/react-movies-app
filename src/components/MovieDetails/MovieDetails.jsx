import './MovieDetails.css'
export function MovieDetails (singleMovie) {
  return (
    <article className='movie-details'>
      <section>
        <label>Rating: </label>
        <span>{singleMovie.imdbRating}</span>
      </section>
      <section>
        <label>Rated: </label>
        <span>{singleMovie.Rated}</span>
      </section>
      <section>
        <label>Released: </label>
        <span>{singleMovie.Released}</span>
      </section>
      <section>
        <label>Duration: </label>
        <span>{singleMovie.Runtime}</span>
      </section>
      <section>
        <label>Genre: </label>
        <span>{singleMovie.Genre}</span>
      </section>
      <section>
        <label>Director: </label>
        <span>{singleMovie.Director}</span>
      </section>
      <section>
        <label>Writer: </label>
        <span>{singleMovie.Writer}</span>
      </section>
      <section>
        <label>Actors: </label>
        <span>{singleMovie.Actors}</span>
      </section>
      <section>
        <label>Plot: </label>
        <p>{singleMovie.Plot}</p>
      </section>
    </article>
  )
}
