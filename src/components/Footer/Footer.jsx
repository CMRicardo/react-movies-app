import { GithubIcon } from '../icons/Github'
import { TwitterIcon } from '../icons/TwitterIcon'
import './Footer.css'
export function Footer () {
  return (
    <footer className='footer'>
      <p>This website was developed by <span>Ricardo Corrales</span></p>
      <div className='social-media'>
        <h3>Social media</h3>
        <ul className='social-media-links'>
          <li>
            <a
              className='social-media-link'
              target='_blank'
              href='https://github.com/CMRicardo'
              rel='noreferrer'
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              className='social-media-link'
              target='_blank'
              href='https://twitter.com/RichardCM'
              rel='noreferrer'
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
