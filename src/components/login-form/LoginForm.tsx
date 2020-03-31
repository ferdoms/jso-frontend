import React from "react";

import Btn from "../button/Button";
import { Input } from "../input/Input";
import loginFormValidate from "../../validations/loginFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { ValidationError } from "@hapi/joi";
import { withAuthApi } from "../../services/Api";
import { InjectedLoginFormProps } from "./InjectedLoginFormProps";
import { UserLoginInterface } from "../../interfaces/UserLoginInterface";
import * as H from "history";

interface IProps {
  history?: H.History;
}

type Props = IProps & InjectedLoginFormProps;

interface State {
  email: string;
  password: string;
  err: ValidationError | undefined;
}

class InnerLoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: undefined
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }
  private _handleChange(e: any) {
    let data: any = this.state;
    data[e.target.id] = e.target.value;
    data.err = "";
    this.setState(data);
  }
  private _handleLogin() {
    const { onLogin } = this.props;
    const { err, ...user } = this.state;

    const validationResult = loginFormValidate(user);

    if (!!validationResult.error)
      this.setState({ err: validationResult.error });

    try {
      if (onLogin && !validationResult.error) {
        onLogin(user as UserLoginInterface);
        this.props.history!.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { err } = this.state;
    return (
      <div className="w-100 tc pa3 ">
        <h2 className="f2">Login</h2>
        <div className="flex flex-column">
          <Input
            id="email"
            inputLabel="Email"
            type="text"
            value={this.state.email}
            onChange={this._handleChange}
            error={err}
          />
          <Input
            id="password"
            inputLabel="Password"
            type="password"
            value={this.state.password}
            onChange={this._handleChange}
            error={err}
          />
        </div>
        <Btn label="Login" type="SECONDARY" onClick={this._handleLogin} />
      </div>
    );
  }
}

export const LoginForm = withAuthApi(InnerLoginForm);
