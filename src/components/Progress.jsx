import PropTypes from 'prop-types'
export default function Progress ({ index, numofQuestions, points , maxPosiblepoints,answer }) {
  return (
    <header className='progress'>
        <progress max={numofQuestions} value={index + Number(answer!==null)}/>
       <p>
        Question <strong>{index + 1}</strong> / {numofQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPosiblepoints}
      </p>
    </header>
  )
}

Progress.propTypes = {
  index: PropTypes.number.isRequired,
  numofQuestions: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  maxPosiblepoints: PropTypes.number.isRequired,
  answer: PropTypes.any,
}
