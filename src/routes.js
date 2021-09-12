import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage.jsx' /*webpackChunkName: "home-page" */),
);

const HeroPage = lazy(() =>
  import('./pages/HeroPage.jsx' /*webpackChunkName: "hero-page" */),
);
// const LoginPage = lazy(() =>
//   import('./pages/LoginPage' /*webpackChunkName: "login-page" */),
// );

// const RegistrationPage = lazy(() =>
//   import('./pages/RegistrationPage' /*webpackChunkName: "registration-page" */),
// );

// const UserPage = lazy(() =>
//   import('./pages/UserPage' /*webpackChunkName: "user-page" */),
// );

// const Page404 = lazy(() =>
//   import('./pages/Page404' /*webpackChunkName: "404-page" */),
// );

const routes = [
  {
    exact: true,
    path: '/',
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
  // {
  //   path: '/user',
  //   component: UserPage,
  //   isProtected: true,
  //   isNav: true,
  //   redirectTo: '/login',
  // },
  // {
  //   exact: false,
  //   path: '/login',
  //   label: 'Login',
  //   component: LoginPage,
  //   isProtected: false,
  //   isLogBar: true,
  //   redirectTo: '/user',
  // },
  // {
  //   exact: false,
  //   path: '/register',
  //   label: 'Registration',
  //   component: RegistrationPage,
  //   isProtected: false,
  //   isLogBar: true,
  //   redirectTo: '/user',
  // },
  // {
  //   component: Page404,
  //   isProtected: null,
  // },
];
export default routes;
