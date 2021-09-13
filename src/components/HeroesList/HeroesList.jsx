import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './HeroesList.module.scss';

import HeroCard from '../HeroCard';

const HeroesList = ({ heroes, onDelete }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={styles.list}>
        {heroes?.map(({ _id, nickname, img }) => (
          <li className={styles.listItem} key={_id}>
            <Link to={{ pathname: `hero/${_id}`, state: { from: location } }}>
              <HeroCard nick={nickname} img={img} />
            </Link>
            <button className={styles.button} onClick={() => onDelete(_id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeroesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
      img: PropTypes.string,
    }),
  ),
};

export default HeroesList;
