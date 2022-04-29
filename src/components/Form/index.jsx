import { useState } from 'react'
import SearchIcon from '../icons/SearchIcon'
import { Movies } from '../Movies'
import { useSearch } from '../../hooks/useSearch'
import './Form.css'

export function Form () {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  const handleOnSubmit = async (evt) => {
    evt.preventDefault()
    setMovies(await useSearch({ keyword: searchValue }))
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
        <button className='search-submit'>
          <SearchIcon />
          Submit
        </button>
      </form>
      <Movies movies={movies} />
    </>
  )
}
