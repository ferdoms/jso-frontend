import React, { Component, ComponentType } from "react";
import { UserLoginInterface } from "../interfaces/UserLoginInterface";
import { InjectedLoginFormProps } from "../components/login-form/InjectedLoginFormProps";
import { InjectedHeaderProps } from "../components/header/InjectedHeaderProps";
import { InjectedWithAuthProps } from "../components/with-auth-guard/InjectedWithAuthProps";

interface IProps {
  onLogin?: (user: UserLoginInterface) => void;
  onLogout?: () => void;
  isLoggedIn?: () => boolean;
}

type InjectedProps = InjectedLoginFormProps & InjectedHeaderProps & InjectedWithAuthProps & IProps;

export const withAuthApi = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) =>
  class ApiContainer extends Component<P, {}> {
    constructor(props: P) {
      super(props);
      this._login = this._login.bind(this);
      this._logout = this._logout.bind(this);
      this._isLoggedIn = this._isLoggedIn.bind(this);
    }

    _login(user: UserLoginInterface) {
      console.log("_login");
      // this.setState({ isLoggedIn: true });
      window.localStorage.setItem("loggedIn", "true");

      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
    }
    _logout() {
      window.localStorage.clear();
    }
    _isLoggedIn() {
      return !!window.localStorage.getItem("loggedIn");
    }

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          onLogin={this._login}
          onLogout={this._logout}
          isLoggedIn={this._isLoggedIn}
        />
      );
    }
  };