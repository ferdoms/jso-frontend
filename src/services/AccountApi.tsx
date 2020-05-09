import React, { Component, ComponentType } from "react";
import {
  UserSignupInterface,
  UserLoginInterface,
  UserAccountInterface
} from "../interfaces";
import { InjectedSignupFormProps } from "../components/signup-form/InjectedSignupFormProps";
import { withAuthApi } from "./AuthApi";
import { InjectedProfilePageProps } from "../pages/profile-page/InjectedProfilePageProps";
import { apiFetch } from "../helpers/api";
import * as tokenManager from "../helpers/tokenHelper";
import { InjectedResetPasswordProps } from "../components/resetpass-form/InjectedResetPasswordProps";
import * as H from "history";

interface IProps {
  history?: H.History
  onLogin?: (user: UserLoginInterface) => void;
  isLoggedIn?: () => boolean;
  onLogout?: () => void;
}

type InjectedProps = InjectedSignupFormProps &
  InjectedProfilePageProps &
  InjectedResetPasswordProps &
  IProps;

interface ApiContainerState {
  userAccount: UserAccountInterface;
}
export const withAccountApi = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) => {
  class AccountApiContainer extends Component<P, ApiContainerState> {
    endpoint: string | undefined;
    constructor(props: P) {
      super(props);
      this.state = {
        userAccount: {
          // id:"",
          email: "",
          fname: "",
          lname: "",
          profileImage: ""
        }
      };
      this._signup = this._signup.bind(this);
      this._deleteAccount = this._deleteAccount.bind(this);
      this._updateUserDetails = this._updateUserDetails.bind(this);
      this._updateUserPasswordReset = this._updateUserPasswordReset.bind(this);
      if (process.env.REACT_APP_ACCOUNT_API)
        this.endpoint = process.env.REACT_APP_ACCOUNT_API;
      else
        new Error(
          "Property 'REACT_APP_ACCOUNT_API' does not exist on type 'ProcessEnv'"
        );
    }

    async _signup(user: UserSignupInterface) {
      const { fname, lname, ...userCredentials } = user;
      const resource = `http://${this.endpoint!}/api/account`;
      await apiFetch(resource, {
        method: "POST",
        body: user
      }).then(async () => {
        await this.props.onLogin!({
          username: userCredentials.email,
          password: userCredentials.password
        });
      });
    }
    async _getUserDetails() {
      const resource = `http://${this.endpoint!}/api/account`;
      return await apiFetch(resource, {
        method: "GET"
      }).then(async (response: Response) => await response.json());
    }
    async _getUserProfileImage(user: UserSignupInterface) {

    }
    async _updateUserDetails(user: UserAccountInterface) {

      // Destructurion to remove the id from request
      const { id, ...userData } = user;

      const resource = `http://${this.endpoint!}/api/account/${id}`;
      await apiFetch(resource, {
        method: "PUT",
        body: userData
      }).then(this.setState({ userAccount: user }));
    }
    async _updateUserPasswordReset(password: string) {
      // TODO encript password

      const resource = `http://${this.endpoint!}/api/account/passwordReset`;
      await apiFetch(resource, {
        method: "PUT",
        body: { password }
      });
    }
    _updateUserProfileImage(user: UserSignupInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
    }
    async _deleteAccount(id: string) {
      const resource = `http://${this.endpoint!}/api/account/${id}`;
      await apiFetch(resource, {
        method: "DELETE"
      }).then(this.props.onLogout!());
    }
    async componentDidMount() {
      if (tokenManager._hasToken()) {
        try{
          const userAccount: UserAccountInterface = await this._getUserDetails();
          if (userAccount) {
            this.setState({ userAccount });
          } else {
            this.props.history!.push("/login")
            tokenManager._removeToken()
          }
        }catch{
          this.props.history!.push("/login")
          tokenManager._removeToken()
        }
      }
    }

    render() {
      const { userAccount } = this.state;
      return (
        <WrappedComponent
          {...(this.props as P)}
          onSubmit={this._signup}
          onDeleteAccount={this._deleteAccount}
          userDetails={userAccount}
          onUpdateUser={this._updateUserDetails}
          onPasswordReset={this._updateUserPasswordReset}
        />
      );
    }
  }
  return withAuthApi(AccountApiContainer);
};
