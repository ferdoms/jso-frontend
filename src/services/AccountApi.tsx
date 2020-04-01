import React, { Component, ComponentType } from "react";
import { UserSignupInterface, UserLoginInterface, UserAccountInterface } from "../interfaces";
import { InjectedSignupFormProps } from "../components/signup-form/InjectedSignupFormProps";
import { withAuthApi } from "./AuthApi";
import { InjectedProfilePageProps } from "../pages/profile-page/InjectedProfilePageProps";

interface IProps {
  onLogin?: (user: UserLoginInterface) => void;
  onLogout?: () => void;
}

type InjectedProps = InjectedSignupFormProps & InjectedProfilePageProps & IProps;

interface ApiContainerState {
  userAccount: UserAccountInterface ;
  
}
export const withAccountApi = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) => {
  class ApiContainer extends Component<P, ApiContainerState> {
    constructor(props: P) {
      super(props);
      this.state = {
        userAccount:{
          email:"",
          fname: "",
          lname: ""
        },
      };
      this._signup = this._signup.bind(this);
      this._deleteAccount = this._deleteAccount.bind(this);
      this._updateUserDetails = this._updateUserDetails.bind(this);
    }


    _signup(user: UserSignupInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      const { fname, lname, ...rest } = user;
      this.props.onLogin!(rest as UserLoginInterface);
    }
    _getUserDetails() {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      
      return {
        fname: "Fernando",
        lname: "Marinho",
        email: "marinhosilva.fernando@gmail.com",
      };
    }
    _getUserProfileImage(user: UserSignupInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
    }
    _updateUserDetails(user: UserAccountInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      this.setState({userAccount:user})


    }
    _updateUserProfileImage(user: UserSignupInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
    }
    _deleteAccount() {

      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      this.props.onLogout!();
    }
    componentDidMount(){
      const userAccount:UserAccountInterface = this._getUserDetails();
      this.setState({userAccount})
    }

    render() {
      const {userAccount} = this.state;
      return (
        <WrappedComponent
          {...(this.props as P)}
          onSubmit={this._signup}
          onDeleteAccount={this._deleteAccount}
          userDetails={userAccount}
          onUpdateUser={this._updateUserDetails}
        />
      );
    }
  }
  return withAuthApi(ApiContainer);
};
