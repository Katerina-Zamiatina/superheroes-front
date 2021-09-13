import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Loader from 'react-loader-spinner';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HeroPage' /*webpackChunkName: "home-page" */),
);

const HeroPage = lazy(() =>
  import('./pages/HeroPage.jsx' /*webpackChunkName: "hero-page" */),
);

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
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.hero} component={HeroPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
