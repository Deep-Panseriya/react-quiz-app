import PropTypes from 'prop-types'
import Options from './Options'

function Questions ({ question, dispatch, answer }) {
  //console.log(question)
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}

Questions.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired
  }).isRequired,
  answer: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default Questions
