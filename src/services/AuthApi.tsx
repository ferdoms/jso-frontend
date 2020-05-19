import React, { Component, ComponentType } from "react";
import { UserLoginInterface } from "../interfaces/UserLoginInterface";
import { InjectedLoginFormProps } from "../components/login-form/InjectedLoginFormProps";
import { InjectedHeaderProps } from "../components/header/InjectedHeaderProps";
import { InjectedWithAuthProps } from "../components/with-auth-guard/InjectedWithAuthProps";
import { apiFetch } from "../helpers/api";
import * as tokenManager from "../helpers/tokenHelper";

interface IProps {
  onLogin?: (user: UserLoginInterface) => void;
  onLogout?: () => void;
  isLoggedIn?: () => boolean;
}

interface IState {
}

type InjectedProps = InjectedLoginFormProps &
  InjectedHeaderProps &
  InjectedWithAuthProps &
  IProps;



export const withAuthApi = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) =>
  class ApiContainer extends Component<P, IState> {
    endpoint: string | undefined;
    constructor(props: P) {
      super(props);
      this._login = this._login.bind(this);
      this._logout = this._logout.bind(this);
      this._isLoggedIn = this._isLoggedIn.bind(this);

      if (process.env.REACT_APP_ACCOUNT_API)
        this.endpoint = process.env.REACT_APP_ACCOUNT_API;
      else
        new Error(
          "Property 'REACT_APP_ACCOUNT_API' does not exist on type 'ProcessEnv'"
        );
    }

    async _login(user: UserLoginInterface) {
      const resource = `http://${this.endpoint!}/api/login`;
      await apiFetch(resource, {
        method: "POST",
        body: user,
        responseType: "text"
      })
      .then(tokenManager._storeToken)
      .then(()=>this.setState({loggedUsername: user.username}))  
    }
    _logout() {
      tokenManager._removeToken()
    }
    _isLoggedIn() {
     return tokenManager._hasToken()
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
