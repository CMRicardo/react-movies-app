import { Link } from 'wouter'
import './Navbar.css'
export function Navbar () {
  return (
    <header className='nav-container'>
      <Link to='/'>
        <a className='nav-link'>
          <h2>Movies app</h2>
        </a>
      </Link>
      <nav>
        <ul className='nav-list'>
          <li>
            <Link to='/'>
              <a className='nav-link'>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <a className='nav-link'>
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
