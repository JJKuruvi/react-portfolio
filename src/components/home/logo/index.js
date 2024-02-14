import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

useEffect(() => {
  gsap.registerPlugin(DrawSVGPlugin)
  gsap.timeline().to(bgRef.current, {
    duration: 1,
    opacity: 1
  })
  .from(outlineLogoRef.current, {
    drawSVG : 1,
    duration :10,
  }, [])

  gsap.fromTo(
    solidLogoRef.current,
    {
      opacity: 0,
    },
    {
      opacity:1,
      delay:4,
      duration: 4,
    }
  )
}, {})

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="J" />
      <svg
        width="680pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 680 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,844.000000) scale(0.100000,-0.100000)"
        >
          <path
          ref={outlineLogoRef}
          d="M3303 8234 c-17 -9 -47 -32 -65 -52 -69 -75 -63 161 -59 -2717 3
          -2052 1 -2623 -9 -2670 -58 -279 -349 -457 -613 -375 -136 42 -258 155 -313
          289 -27 64 -28 73 -33 312 l-6 245 -30 59 c-23 45 -42 66 -79 90 l-49 30 -789
          3 c-780 2 -789 2 -837 -18 -59 -26 -102 -70 -125 -128 -22 -58 -23 -449 0
          -642 14 -129 45 -302 64 -365 116 -383 243 -635 459 -910 89 -113 309 -328
          424 -414 324 -242 667 -391 1067 -463 109 -19 159 -22 385 -22 226 0 276 3
          385 22 373 67 660 182 965 385 383 255 712 662 886 1095 78 192 135 420 161
          637 19 158 12 5445 -6 5490 -19 45 -64 94 -107 115 -37 19 -64 20 -841 20
          -708 0 -807 -2 -835 -16z m1479 -4904 c70 -20 128 -120 112 -193 -17 -81 -86
          -137 -166 -137 -57 0 -96 18 -132 60 -74 88 -46 214 58 261 47 21 76 23 128 9z
          m18 -460 c22 -11 52 -38 66 -60 26 -38 27 -45 21 -128 -15 -203 -85 -473 -179
          -687 -74 -167 -195 -368 -242 -398 -86 -57 -205 -28 -250 61 -37 74 -29 116
          40 223 155 239 263 543 289 815 5 44 16 87 29 110 43 77 145 105 226 64z M5085 8117 c11 -27 14 -479 17 -2727 3 -3014 9 -2768 -68 -3078 -181
          -736 -710 -1354 -1406 -1646 -311 -130 -599 -187 -948 -187 -457 0 -884 126
          -1272 377 -38 24 -68 42 -68 40 0 -8 401 -348 478 -404 316 -233 682 -385
          1066 -443 106 -16 192 -22 346 -22 213 -1 282 5 499 49 359 72 759 266 1051
          512 383 321 672 783 789 1262 71 294 66 50 66 3065 0 2649 0 2712 -19 2753
          -15 34 -71 86 -277 262 -142 121 -261 220 -263 220 -3 0 1 -15 9 -33z M2184 3317 c19 -38 22 -64 27 -287 5 -223 7 -250 28 -302 74 -191
          233 -312 424 -325 l77 -6 0 210 0 211 -27 51 c-27 49 -104 119 -500 448 l-50
          43 21 -43z"/>
        
          
        </g>
      </svg>
    </div>
  )
}

export default Logo
