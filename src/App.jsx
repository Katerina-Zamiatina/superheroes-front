import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Loader from 'react-loader-spinner';
import HomePage from './pages/HomePage';
import HeroPage from './pages/HeroPage';

const App = () => {
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
          <Route exact path="/superheroes-front" component={HomePage} />
          <Route path="/hero" component={HeroPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
