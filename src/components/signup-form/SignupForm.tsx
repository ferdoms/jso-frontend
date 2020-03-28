import React from "react";

import Btn from "../button/Button";
import { Input } from "../input/Input";
import signupFormValidate from "../../validations/signupFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";

interface Props {
  onSubmit?: () => void;
}

interface State {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirm_pass: string;
  err: string | undefined;
}

export class SignupForm extends React.Component<Props, State> {
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
  private _handleSubmit() {
    const { onSubmit } = this.props;
    const { fname, lname, email, password, confirm_pass } = this.state;

    let result = signupFormValidate({
      fname,
      lname,
      email,
      password,
      confirm_pass
    });
    console.log(result);

    if (!!result.error) this.setState({ err: result.error.message });

    if (onSubmit) onSubmit();
  }

  render() {
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
          />
          <Input
            id="lname"
            inputLabel="Last Name"
            type="text"
            value={this.state.lname}
            onChange={this._handleChange}
          />
          <Input
            id="email"
            inputLabel="Email"
            type="text"
            value={this.state.email}
            onChange={this._handleChange}
          />
          <Input
            id="password"
            inputLabel="Password"
            type="password"
            value={this.state.password}
            onChange={this._handleChange}
          />
          <Input
            id="confirm_pass"
            inputLabel="Confirm Password"
            type="password"
            value={this.state.confirm_pass}
            onChange={this._handleChange}
          />
        </div>
        <ErrorMsg text={this.state.err} />
        <Btn label="Sign up" type="SECONDARY" onClick={this._handleSubmit} />
      </div>
    );
  }
}
