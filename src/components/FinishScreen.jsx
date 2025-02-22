import PropTypes from 'prop-types'

export default function FinishScreen ({ points, highscore, maxPosiblepoints , dispatch}) {
  const percentage = (points / maxPosiblepoints) * 100
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className='result'>
      <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
      {maxPosiblepoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className='btn btn-ui'
      onClick={()=>dispatch({type:'restart'})}>Restart</button>
    </>
  )
}

FinishScreen.propTypes = {
  highscore: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  maxPosiblepoints: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}
