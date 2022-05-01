import { useState } from 'react'

import './Form.css'

import { Movies, Spinner, SearchIcon } from '../index'
import { useSearch } from '../../hooks'

export function Form () {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const handleOnSubmit = async (evt) => {
    evt.preventDefault()
    useSearch({ keyword: searchValue, setMovies, setLoading })
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
      {
        loading
          ? <Spinner />
          : <Movies movies={movies} />
      }
    </>
  )
}
