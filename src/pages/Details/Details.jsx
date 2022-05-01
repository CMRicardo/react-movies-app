import { useContext } from 'react'
import { MoviesContext } from '../../context'

export function Details ({ params }) {
  const { movies } = useContext(MoviesContext)
  console.log({ movies })
  return (
    <>
      <h1>{params.id}</h1>
      <h2>Hi</h2>
    </>
  )
}
