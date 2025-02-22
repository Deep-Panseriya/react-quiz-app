
import PropTypes from 'prop-types';

function StartScreen({ numofQuestions, dispatch }) {
    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numofQuestions} questions to test your React mastery</h3>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: 'start' })}
            >
                Let&apos;s start
            </button>
        </div>
    )
}
StartScreen.propTypes = {
    numofQuestions: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
};



export default StartScreen