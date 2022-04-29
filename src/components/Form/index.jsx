import { useState } from 'react'

import './Form.css'

import { Movies } from '../Movies'
import { useSearch } from '../../hooks/useSearch'
import SearchIcon from '../icons/SearchIcon'
import Spinner from '../Spinner'

export function Form () {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const handleOnSubmit = async (evt) => {
    evt.preventDefault()
    setLoading(true)
    useSearch({ keyword: searchValue, setMovies })
    setLoading(false)
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
