import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.scss';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
