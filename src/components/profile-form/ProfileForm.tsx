import React from "react";

import Btn from "../button/Button";
import { Input } from "../input/Input";
import profileFormValidate from "../../validation/profileFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { ResetPassPage } from "../../pages/resetpass-page/ResetPassPage";
import { ResetPassForm } from "../resetpass-form/ResetPassForm";

interface Props {
  onSubmit?: () => void;
}

interface State {
  fname: string;
  lname: string;
  email: string;
  err: string | undefined;
}

export class ProfileForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fname: "Fernando",
      lname: "Marinho",
      email: "marinhosilva.fernando@gmail.com",
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
    const { fname, lname, email } = this.state;

    let result = profileFormValidate({
      fname,
      lname,
      email,
    });
    console.log(result);

    if (!!result.error) this.setState({ err: result.error.message });

    if (onSubmit) onSubmit();
  }

  render() {
    return (
      <div className="w-100 pa3 ">
        <h3 className="f3 pa2">Edit Profile</h3>
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
        </div>
        <ErrorMsg text={this.state.err} />
        <Btn label="Save" type="SECONDARY" onClick={this._handleSubmit} />
      </div>
    );
  }
}
