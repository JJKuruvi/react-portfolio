import './index.scss'

const AnimateLetters = ({letterClass, starArray, idx}) => {
    return (
        <span>
            {
                starArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>{char}</span>
                ))
            }
        </span>
    )
};

export default AnimateLetters