import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { downloadHeroes } from './redux/heroes/heroes-operations';
// import { getStateHeroes } from './redux/heroes/heroes-selectors';
import { useEffect } from 'react';
import Header from './components/Header';
import Loader from 'react-loader-spinner';
import HomePage from './pages/HomePage';
import HeroPage from './pages/HeroPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(downloadHeroes()), [dispatch]);

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#fff"
            height={80}
            width={80}
            className="Loader"
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hero" component={HeroPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
