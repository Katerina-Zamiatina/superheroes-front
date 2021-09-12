import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStateHeroes } from '../../redux/heroes/heroes-selectors';
import styles from './HeroesList.module.scss';

import HeroCard from '../HeroCard';

const HeroesList = () => {
  const location = useLocation();
  const { heroes } = useSelector(getStateHeroes);
  return (
    <div>
      <ul className={styles.list}>
        {heroes?.map(
          ({
            _id,
            nickname,
            originDescription,
            realName,
            superpowers,
            catchPhrase,
            img,
          }) => (
            <li className={styles.listItem} key={_id}>
              <Link to={{ pathname: `hero/${_id}`, state: { from: location } }}>
                <HeroCard nick={nickname} img={img} />
              </Link>
              {/* <HeroCard
                nick={nickname}
                desc={originDescription}
                name={realName}
                powers={superpowers}
                phrase={catchPhrase}
                img={img}
              /> */}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default HeroesList;
