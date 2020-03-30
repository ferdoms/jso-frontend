import React, { Component, ComponentType } from "react";
import { Redirect } from "react-router-dom";
import * as H from "history";

interface whithAuthProps {
  isProtected: boolean;
  guestOnly: boolean;
  location: H.Location;
}

interface whithAuthState {
  isLoggedIn: boolean;
}

export const withAuth = <P extends object>(AuthedComponent: ComponentType<P>) =>
  class withAuth extends Component<P & whithAuthProps, whithAuthState> {
    constructor(props: P & whithAuthProps) {
      super(props);
      this.state = {
        isLoggedIn: false,
      };
    }
    componentDidMount() {
    }

    render() {
      const { isLoggedIn } = this.state;
      const { isProtected, guestOnly, ...props } = this.props;

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
  };
