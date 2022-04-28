import { useState } from 'react'
import { Movies } from '../Movies'
import './Form.css'

export function Form () {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  const handleOnSubmit = (evt) => {
    evt.preventDefault()
    globalThis.fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=ccb4414a`)
      .then(res => res.json())
      .then(response => setMovies(response.Search))
  }
  const handleOnChange = (evt) => {
    const value = evt.target.value
    setSearchValue(value)
  }
  return (
    <>
      <form className='search-form' onSubmit={handleOnSubmit}>
        <label htmlFor='search-bar'>Search</label>
        <input
          onChange={handleOnChange}
          name='search-bar'
          className='search-bar'
          type='text'
          placeholder='Avengers...'
        />
        <button className='search-submit'>Submit</button>
      </form>
      <Movies movies={movies} />
    </>
  )
}
