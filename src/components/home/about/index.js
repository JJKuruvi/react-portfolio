import './index.scss'
import AnimatedLetters from '../../animaterLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faMicrosoft, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            starArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Highly skilled Software Engineer with 6 years of experience
          in utilities and financial domain. Currently holding a Permanent
          Residency status in Canada. Experienced in working as Lead Developer
          and Developer, showcasing adaptability and a comprehensive
          understanding of the AGILE methodologies. Proficient in ASP .NET MVC,
          React JS, WPF, .NET Desktop Development and Azure, with a strong track
          record of delivering high-quality solutions that meet client
          requirements. Seeking a challenging position in a dynamic organization
          where I can leverage my skills and contribute to the development of
          innovative software solutions.
        </p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cube-spinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faMicrosoft} style={{color: "#350eed",}}  color='#DD031'/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </div>
  )
}

export default About
