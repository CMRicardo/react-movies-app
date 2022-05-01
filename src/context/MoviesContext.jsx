import React, { useState } from 'react'

export const MoviesContext = React.createContext({})

export function MoviesContextProvider ({ children }) {
  const [movies, setMovies] = useState([])
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}
