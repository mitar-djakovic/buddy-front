/* eslint-disable max-len */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppLayout from './layout/appLayout';
import AuthLayout from './layout/authLayout';
import HomeView from './views/home';
import LoginView from './views/login';
import WelcomeView from './views/welcome';

const routesConfig = (token) => {
  const adminRoutesConfig = [
    {
      path: '/',
      exact: true,
      component: () => (token ? <Redirect to="/app" /> : <Redirect to="/login" />),
      key: 1,
    },
    {
      path: '/login',
      layout: AuthLayout,
      routes: [
        {
          path: '/login',
          exact: true,
          component: () => <LoginView />,
        },
      ],
    },
    {
      path: '/app',
      layout: AppLayout,
      routes: [
        {
          path: '/app',
          exact: true,
          component: () => <Redirect to="/app/home" />,
        },
        {
          path: '/app/welcome',
          exact: true,
          component: () => <WelcomeView />,
        },
        {
          exact: true,
          path: '/app/home',
          component: () => <HomeView />,
        },
      ],
    },
  ];

  return adminRoutesConfig;
};

const renderRoutes = (routes) => (routes ? (
  <Switch>
    {routes.map((route) => {
      const Layout = route.layout || React.Fragment;
      const Component = route.component;

      return (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
        />
      );
    })}
  </Switch>
) : null);

function Routes() {
  const token = '';
  return renderRoutes(routesConfig(token));
}

export default Routes;
