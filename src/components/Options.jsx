import PropTypes from 'prop-types'
function Options ({ question, answer, dispatch }) {
  const hasAnswer = answer !== null
  return (
    <div className='options'>
      {question.options.map((options, index) => (
        <button
          key={options}
          className={`btn btn-option 
            ${index === answer ? 'answer' : ''}
            ${
              hasAnswer
                ? index === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswer}
        >
          {options}
        </button>
      ))}
    </div>
  )
}

Options.propTypes = {
  question: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.number.isRequired
  }).isRequired,
  answer: PropTypes.any,
  dispatch: PropTypes.func.isRequired
}

export default Options
