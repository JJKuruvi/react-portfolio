import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimateLetters from '../animaterLetters'
import Logo from './logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['o', 'j', 'i']
  const jobArray = [
    'R',
    'e',
    'a',
    'c',
    't',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i, </span>
          <br />
          <span className={`${letterClass} _13`}>I'</span>
          <span className={`${letterClass} _14`}>m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimateLetters
            letterClass={letterClass}
            starArray={nameArray}
            idx={15}
          />
          <br />
          <AnimateLetters
            letterClass={letterClass}
            starArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer/ .NET Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
    <Loader type='pacman'></Loader>
    </>
  )
}

export default Home
