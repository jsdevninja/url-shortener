import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingScreen from "src/components/LoadingScreen";
import { ROUTE_PATH } from "src/constants";

const routeViews = [
  {
    exact: true,
    path: ROUTE_PATH.UNKNOWN,
    component: lazy(() => import("src/views/NotFound")),
  },
  {
    exact: true,
    path: ROUTE_PATH.ROOT,
    component: lazy(() => import("src/views/Home")),
  },
  {
    exact: true,
    path: ROUTE_PATH.URL,
    component: lazy(() => import("src/views/Url")),
  },
];

const routes = (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routeViews.map((route, i) => {
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Component {...props} />}
          />
        );
      })}

      <Redirect path="*" to={ROUTE_PATH.UNKNOWN} />
    </Switch>
  </Suspense>
);

export default routes;
