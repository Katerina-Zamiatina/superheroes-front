import { useSelector, useDispatch } from 'react-redux';
import { downloadHeroes } from './redux/heroes/heroes-operations';
import { getStateHeroes } from './redux/heroes/heroes-selectors';
import { useEffect } from 'react';
import Header from './components/Header';
import HeroesList from './components/HeroesList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(downloadHeroes()), [dispatch]);

  return (
    <div className="App">
      <Header />
      <HeroesList />
    </div>
  );
};

export default App;
