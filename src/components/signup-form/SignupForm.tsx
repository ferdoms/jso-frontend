import React from "react";
import Btn from "../button/Button";
import { Input } from "../input/Input";
import signupFormValidate from "../../validations/signupFormValidate";
import { ValidationError } from "@hapi/joi";
import { InjectedSignupFormProps } from "./InjectedSignupFormProps";
import { UserSignupInterface } from "../../interfaces";
import * as H from "history";
import { withAccountApi } from "../../services/AccountApi";

interface IProps {
  history?: H.History;
}

type Props = InjectedSignupFormProps & IProps;

interface State {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirm_pass: string;
  err: ValidationError | undefined;
}

class InnerSignupForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirm_pass: "",
      err: undefined
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  private _handleChange(e: any) {
    let data: any = this.state;
    data[e.target.id] = e.target.value;
    data.err = "";
    this.setState(data);
  }
  private async _handleSubmit() {
    const { onSubmit } = this.props;
    const { fname, lname, email, password, confirm_pass } = this.state;

    const validationResult = signupFormValidate({
      fname,
      lname,
      email,
      password,
      confirm_pass
    });

    if (!!validationResult.error)
      this.setState({ err: validationResult.error });
      
    try {
      if (onSubmit && !validationResult.error) {
        console.log("_handleSubmit.if")
        await onSubmit({ fname, lname, email, password } as UserSignupInterface);
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
        <h2 className="f2">Sign up</h2>
        <div className="flex flex-column">
          <Input
            id="fname"
            inputLabel="First Name"
            type="text"
            value={this.state.fname}
            onChange={this._handleChange}
            error={err}
          />
          <Input
            id="lname"
            inputLabel="Last Name"
            type="text"
            value={this.state.lname}
            onChange={this._handleChange}
            error={err}
          />
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
          <Input
            id="confirm_pass"
            inputLabel="Confirm Password"
            type="password"
            value={this.state.confirm_pass}
            onChange={this._handleChange}
            error={err}
          />
        </div>
        <Btn label="Sign up" type="SECONDARY" onClick={this._handleSubmit} />
      </div>
    );
  }
}

export const SignupForm = withAccountApi(InnerSignupForm);
