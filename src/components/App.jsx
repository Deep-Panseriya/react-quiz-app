import { useEffect, useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import Questions from './Questions'
import StartScreen from './StartScreen'
import Loader from './Loader'
import Error from './Error'
import NextButton from './NextButton'
import Progress from './Progress'
import FinishScreen from './FinishScreen'

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0
}

function reducer (state, action) {
  // console.log(state.questions)
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'active'
      }
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }

    case 'newAnswer': {
      const question = state.questions.at(state.index)
      //console.log(question.points)
      return {
        ...state,
        answer: action.payload,
        points:
          state.points +
          (action.payload === question.correctOption ? question.points : 0)
      }
    }

    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'finish':
      return {
        ...state,
        status: 'finish',
        highScore:
          state.highScore > state.points ? state.highScore : state.points
      }
    case 'restart':
      return {
        ...state,
        points: 0,
        highscore: 0,
        index: 0,
        answer: null,
        status: 'ready'
      }
    default:
      throw new Error('Action unkonwn')
  }
}
function App () {
  const [{ questions, status, index, answer, points, highScore }, dispatch] =
    useReducer(reducer, initialState)
  const numofQuestions = questions.length
  const maxPosiblepoints = questions.reduce((prev, cur) => prev + cur.points, 0)
  //console.log(maxPosiblepoints)
  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }))
  }, [])
  return (
    <>
      <div className='app'>
        <Header />
        <Main>
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && (
            <StartScreen numofQuestions={numofQuestions} dispatch={dispatch} />
          )}
          {status === 'active' && (
            <>
              <Progress
                index={index}
                numofQuestions={numofQuestions}
                points={points}
                maxPosiblepoints={maxPosiblepoints}
                answer={answer}
              />
              <Questions
                question={questions.at(index)}
                dispatch={dispatch}
                answer={answer}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numofQuestions={numofQuestions}
              />
            </>
          )}
          {status === 'finish' && (
            <FinishScreen
              highscore={highScore}
              points={points}
              maxPosiblepoints={maxPosiblepoints}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    </>
  )
}

export default App
