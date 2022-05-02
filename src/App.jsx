import { Route } from 'wouter'
import './App.css'
import { Footer, Form, Navbar } from './components'
import { Details, About } from './pages'
import { MoviesContextProvider } from './context'
import Helmet from 'react-helmet'

export default function App () {
  return (
    <MoviesContextProvider>
      <Helmet>
        <title>Movies app</title>
        <meta name='description' content='Search for your favorite movies and TV shows 🍿🍿🍿' />
        <meta name='author' content='Ricardo Corrales @CMRicardo at github' />
      </Helmet>
      <div className='App'>
        <Navbar />
        <Route path='/'>
          <h1>Movies app</h1>
          <Form />
        </Route>
        <Route path='/movie/:id' component={Details} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </MoviesContextProvider>
  )
}
