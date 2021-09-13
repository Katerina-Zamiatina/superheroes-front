import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage.jsx' /*webpackChunkName: "home-page" */),
);

const HeroPage = lazy(() =>
  import('./pages/HeroPage.jsx' /*webpackChunkName: "hero-page" */),
);

const routes = [
  {
    exact: true,
    path: '/superheroes-front',
    component: HomePage,
    isProtected: false,
    redirectTo: '/',
  },
  {
    exact: true,
    path: '/hero/:heroId',
    component: HeroPage,
    isProtected: false,
  },
];
export default routes;
