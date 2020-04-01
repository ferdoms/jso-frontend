import React, { Component, ComponentType } from "react";
import { UserSignupInterface, UserLoginInterface } from "../interfaces";
import { InjectedSignupFormProps } from "../components/signup-form/InjectedSignupFormProps";
import { withAuthApi } from "./AuthApi";
import { InjectedProfilePageProps } from "../pages/profile-page/InjectedProfilePageProps";

interface IProps {
  onSubmit?: (user: UserSignupInterface) => void;
  onLogin?: (user: UserLoginInterface) => void;
  onDeleteAccount?: () => void;
  onLogout?: () => void;
}

type InjectedProps = InjectedSignupFormProps & InjectedProfilePageProps & IProps;

interface whithAuthState {
  isLoggedIn: boolean;
}
export const withAccountApi = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) => {
  class ApiContainer extends Component<P, whithAuthState> {
    constructor(props: P) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
      this._signup = this._signup.bind(this);
      this._onDeleteAccount = this._onDeleteAccount.bind(this);
    }

    _signup(user: UserSignupInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      const { fname, lname, ...rest } = user;
      this.props.onLogin!(rest as UserLoginInterface);
    }
    _onDeleteAccount() {

      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      this.props.onLogout!();
    }


    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          onSubmit={this._signup}
          onDeleteAccount={this._onDeleteAccount}
        />
      );
    }
  }
  return withAuthApi(ApiContainer);
};
