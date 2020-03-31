import React from "react";

import Btn from "../button/Button";
import { Input } from "../input/Input";
import loginFormValidate from "../../validations/loginFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { ValidationError } from "@hapi/joi";

interface Props {
  onLogin?: () => void;
}

interface State {
  email: string;
  password: string;
  err: ValidationError | undefined;
}

export class LoginForm extends React.Component<Props, State> {
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
    const { email, password } = this.state;

    let result = loginFormValidate({ email, password });

    if (!!result.error) this.setState({ err: result.error});

    if (onLogin) onLogin();
  }

  render() {
    const { err } = this.state
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
