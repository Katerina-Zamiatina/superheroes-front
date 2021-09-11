import { useSelector, useDispatch } from 'react-redux';
import { getStateHeroes } from '../../redux/heroes/heroes-selectors';

import HeroCard from '../HeroCard';

import routes from '../../routes';

const HeroesList = () => {
  const { heroes } = useSelector(getStateHeroes);
  console.log('HeroesList', heroes);
  return (
    <div>
      <ul>
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
            <HeroCard
              key={_id}
              nick={nickname}
              desc={originDescription}
              name={realName}
              powers={superpowers}
              phrase={catchPhrase}
              img={img}
            />
          ),
        )}
      </ul>
    </div>
  );
};

export default HeroesList;
