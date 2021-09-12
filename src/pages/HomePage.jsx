import { useDispatch } from 'react-redux';
import { downloadHeroes } from '../redux/heroes/heroes-operations';
// import { getStateHeroes } from '../redux/heroes/heroes-selectors';
import { useEffect } from 'react';
import HeroesList from '../components/HeroesList';
import LoadMoreButton from '../components/LoadMoreBtn/LoadMoreBtn';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(downloadHeroes()), [dispatch]);
  return (
    <>
      <HeroesList />
      <LoadMoreButton />
    </>
  );
};

export default HomePage;
