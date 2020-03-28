import React from "react";

import Btn from "../button/Button";
import { Input } from "../input/Input";
import emailFormValidate from "../../validations/emailFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";

interface Props {
  onSubmit?: () => void;
}

interface State {
  email: string;
  err: string | undefined;
}

export class EmailForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
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
    const { email } = this.state;

    let result = emailFormValidate({ email });

    if (!!result.error) this.setState({ err: result.error.message });

    if (onSubmit) onSubmit();
  }

  render() {
    return (
      <div className="w-100 pa3 ">
        <h3 className="f2 tc">Find your Account</h3>
        <p className="pl2">Please enter your email address search for your account.</p>
        <div className="tc">
          <div className="flex flex-column ">
            <Input
              id="email"
              inputLabel="Email"
              type="text"
              value={this.state.email}
              onChange={this._handleChange}
              errComponent={<ErrorMsg text={this.state.err} />}
            />
          </div>
          <Btn label="Submit" type="SECONDARY" onClick={this._handleSubmit} />
        </div>
      </div>
    );
  }
}
