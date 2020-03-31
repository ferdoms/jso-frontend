import React from "react";

import Btn from "../button/Button";
import { Input } from "../input/Input";
import resetPassFormValidate from "../../validations/resetPassFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { ValidationError } from "@hapi/joi";

interface Props {
  onSubmit?: () => void;
}

interface State {
  password: string;
  confirm_pass: string;
  err: ValidationError | undefined;
}

export class ResetPassForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
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
    const { password, confirm_pass } = this.state;

    let result = resetPassFormValidate({
      password,
      confirm_pass
    });
    console.log(result);

    if (!!result.error) this.setState({ err: result.error });

    if (onSubmit) onSubmit();
  }

  render() {
    const { err } = this.state
    return (
      <div className="w-100 pa3 ">
        <h3 className="f2 tc">Reset Passworld</h3>
        <p className="pl2">Please enter your new passworld.</p>

        <div className="flex flex-column">
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
        <div className="tc mt3">
          <Btn label="Sign up" type="SECONDARY" onClick={this._handleSubmit} />
        </div>
      </div>
    );
  }
}
