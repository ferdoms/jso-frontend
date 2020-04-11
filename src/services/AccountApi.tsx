import React, { Component, ComponentType } from "react";
import { UserSignupInterface, UserLoginInterface, UserAccountInterface } from "../interfaces";
import { InjectedSignupFormProps } from "../components/signup-form/InjectedSignupFormProps";
import { withAuthApi } from "./AuthApi";
import { InjectedProfilePageProps } from "../pages/profile-page/InjectedProfilePageProps";
import { apiFetch } from "../helpers/api";
import * as tokenManager from "../helpers/tokenHelper";

interface IProps {
  onLogin?: (user: UserLoginInterface) => void;
  isLoggedIn?: () => boolean;
  onLogout?: () => void;
  loggedUsername?: string,
}

type InjectedProps = InjectedSignupFormProps & InjectedProfilePageProps & IProps;

interface ApiContainerState {
  userAccount: UserAccountInterface ;
}
export const withAccountApi = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) => {
  class ApiContainer extends Component<P, ApiContainerState> {
    endpoint: string | undefined;
    constructor(props: P) {
      super(props);
      this.state = {
        userAccount:{
          // id:"",
          email:"",
          fname: "",
          lname: ""
        }
      };
      this._signup = this._signup.bind(this);
      this._deleteAccount = this._deleteAccount.bind(this);
      this._updateUserDetails = this._updateUserDetails.bind(this);
      if (process.env.REACT_APP_ACCOUNT_API)
      this.endpoint = process.env.REACT_APP_ACCOUNT_API;
    else
      new Error(
        "Property 'REACT_APP_ACCOUNT_API' does not exist on type 'ProcessEnv'"
      );
    }
    


    async _signup(user: UserSignupInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      const { fname, lname, ...userCredentials } = user;
      const resource = `http://${this.endpoint!}/api/account`;
      await apiFetch(resource, {
        method: "POST",
        body: user,
      }).then(async () => {
        await this.props.onLogin!({username:userCredentials.email, password:userCredentials.password});
      })
      
      
    }
    async _getUserDetails() {
      const resource = `http://${this.endpoint!}/api/account`;
      return await apiFetch(resource, {
        method: "GET",
      })
      .then(async (response:Response) => await response.json())
    }
    async _getUserProfileImage(user: UserSignupInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      
    }
    async _updateUserDetails(user: UserAccountInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")

      // Destructurion to remove the id from request
      const { id, ...userData} = user;

      const resource = `http://${this.endpoint!}/api/account/${id}`;
       await apiFetch(resource, {
        method: "PUT",
        body:userData
      })
      .then(this.setState({userAccount:user}))
     


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
    async componentDidMount(){
        const userAccount:UserAccountInterface =  await this._getUserDetails();
        if(userAccount){
          this.setState({userAccount})
        }else{
          // TODO throw error case user account is not set
        }
        

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
