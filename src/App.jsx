import { Route } from 'wouter'
import './App.css'
import { Form } from './components'
import { Details } from './pages'
import { MoviesContextProvider } from './context'

export default function App () {
  return (
    <MoviesContextProvider>
      <div className='App'>
        <Route path='/'>
          <h1>Movies app</h1>
          <Form />
        </Route>
        <Route path='/movie/:id' component={Details} />
      </div>
    </MoviesContextProvider>
  )
}
