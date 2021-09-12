import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHeroById } from '../redux/heroes/heroes-operations';
// import { getHeroById } from '../redux/heroes/heroes-selectors';
import apiService from '../service/apiService';
// import Loader from 'react-loader-spinner';
import HeroDetails from '../components/HeroDetails';
// import routes from '../routes';

const HeroPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const heroId = location.pathname.split('/').slice(-1);
  console.log(heroId);
  const hero = useEffect(() => apiService.getHeroById(heroId));
  // useEffect(() => dispatch(fetchHeroById(heroId)), [dispatch]);
  // const hero = useSelector(getHeroById(heroId));
  console.log('HeroPage', hero);
  return (
    <>
      <HeroDetails />
    </>
  );
};

export default HeroPage;
