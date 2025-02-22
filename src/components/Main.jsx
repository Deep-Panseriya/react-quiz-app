import PropTypes from 'prop-types';

export default function Main({children}) {
  return (
    <main className="main">
      {children}
    </main>
  )
}
Main.propTypes = {
    children: PropTypes.node.isRequired,
  };
