import PropTypes from 'prop-types'

export default function NextButton ({
  dispatch,
  answer,
  index,
  numofQuestions
}) {
  if (answer === null) return null
  if (index < numofQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    )

  if (index === numofQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        finish
      </button>
    )
}
NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.any,
  index: PropTypes.number,
  numofQuestions: PropTypes.number.isRequired
}
