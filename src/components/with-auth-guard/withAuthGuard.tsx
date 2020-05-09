import React, { Component, ComponentType } from "react";
import { Redirect } from "react-router-dom";
import * as H from "history";
import { withAuthApi } from "../../services/AuthApi";
import { InjectedWithAuthProps } from "./InjectedWithAuthProps";

interface IProps {
  isProtected: boolean;
  guestOnly: boolean;
  location: H.Location;
  // isLoggedIn?: () => boolean;
}

type whithAuthProps = IProps & InjectedWithAuthProps;

interface whithAuthState {
  isLoggedIn: boolean;
}
/**
 *
 * @param AuthedComponent Component Class to be AuthoGuarded
 */
export const withAuthGuard = <P extends object>(
  AuthedComponent: ComponentType<P>
) => {
  class withAuth extends Component<P & whithAuthProps, whithAuthState> {
    constructor(props: P & whithAuthProps) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    render() {
      const { isProtected, guestOnly, ...props } = this.props;
      const isLoggedIn = this.props.isLoggedIn!();

      if (isProtected && !isLoggedIn) {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }

      if (isLoggedIn && guestOnly) {
        return (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: props.location }
            }}
          />
        );
      }
      return <AuthedComponent {...(props as P)} isLoggedIn={isLoggedIn} />;
    }
  }
  // inject Authentication API
  return withAuthApi(withAuth);
};
