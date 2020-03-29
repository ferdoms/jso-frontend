import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { RouteInterface } from "../../interfaces/RouteInterface";

export const RenderRoutes: FunctionComponent<{
  routes: RouteInterface[];
}> = props => {
  const { routes } = props;
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};

const RouteWithSubRoutes: FunctionComponent<RouteInterface> = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => {
        return <route.component {...props} {...route} />;
      }}
    />
  );
};
