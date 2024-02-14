import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../animaterLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

const sendEmail = (e) => {
  e.preventDefault()
  emailjs
    .sendForm('service_5u33d5e', 'template_lv7gldn', refForm.current, 'uFJKQgVCwjD8oZzrb')
    .then((result) => {
        alert('Your message was suceesfully sent!')
        window.location.reload(false)
      },
      (error) => {
        alert('Failed to send message, please try again')
      }
    )
}
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              starArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I would welcome the opportunity to discuss how my skills and experience align with
            your organization's goals and objectives. Please feel free to contact me at
            your convenience. You can reach out to me at jozefkuruvila@gmail.com
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='user_name' placeholder='Name' required/>
                    </li>
                    <li className='half'>
                        <input type='email' name='user_email' placeholder='Email' required/>
                    </li>
                    <li >
                        <input placeholder='Subject' type='text' name='subject' required/>
                    </li>
                    <li >
                        <textarea placeholder='Message' type='text' name='message' required/>
                    </li>
                    <li >
                        <input type='submit' className='flat-button' value='SUBMIT'/>
                    </li>
                </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Joji Joseph Kuruvila
          <br/>
          Kottayam
          <br/>
          <span>jozefkuruvila@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[9.591495894935033, 76.52211086027363]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[9.591495894935033, 76.52211086027363]}>
              <Popup>This is my hometown, come over for a cup of hot coffee!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
