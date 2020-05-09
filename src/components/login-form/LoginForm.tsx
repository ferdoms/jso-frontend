import React from "react";
import Btn from "../button/Button";
import { Input } from "../input/Input";
import loginFormValidate from "../../validations/loginFormValidate";
import { ValidationError } from "@hapi/joi";
import { withAuthApi } from "../../services/AuthApi";
import { InjectedLoginFormProps } from "./InjectedLoginFormProps";
import { UserLoginInterface } from "../../interfaces/UserLoginInterface";
import * as H from "history";
import ErrorMsg from "../errorMsg/ErrorMsg";

interface IProps {
  history?: H.History;
}

type Props = IProps & InjectedLoginFormProps;

interface State {
  email: string;
  password: string;
  validationError: ValidationError | undefined;
  pageError: string | undefined;
}

class InnerLoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validationError: undefined,
      pageError: undefined
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }
  private _handleChange(e: any) {
    let data: any = this.state;
    data[e.target.id] = e.target.value;
    data.validationError = "";
    data.pageError = "";
    this.setState(data);
  }
  private async _handleLogin() {
    const { onLogin } = this.props;
    const { validationError, ...user } = this.state;

    const validationResult = loginFormValidate(user);

    if (!!validationResult.error)
      this.setState({ validationError: validationResult.error });

    try {
      if (onLogin && !validationResult.error) {
        await onLogin({ username: user.email, password: user.password });
        this.props.history!.push("/dashboard");
      }
    } catch (error) {
      this.setState({pageError: "Email and/or email incorrect, please try again!"})
    }
  }

  render() {
    const { validationError, pageError } = this.state;
    return (
      <div className="w-100 tc pa3 ">
        <h2 className="f2">Login</h2>
        {pageError? <div className="bg-washed-red pa2 mb3"><ErrorMsg text={pageError}/></div>:<></>}
        <div className="flex flex-column">
          <Input
            id="email"
            inputLabel="Email"
            type="text"
            value={this.state.email}
            onChange={this._handleChange}
            error={validationError}
          />
          <Input
            id="password"
            inputLabel="Password"
            type="password"
            value={this.state.password}
            onChange={this._handleChange}
            error={validationError}
          />
        </div>
        <Btn label="Login" type="SECONDARY" onClick={this._handleLogin} />
      </div>
    );
  }
}

export const LoginForm = withAuthApi(InnerLoginForm);
