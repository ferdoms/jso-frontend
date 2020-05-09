import React from "react";

import Btn from "../button/Button";
import { Input } from "../input/Input";
import resetPassFormValidate from "../../validations/resetPassFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { ValidationError } from "@hapi/joi";
import * as H from "history";
import { InjectedResetPasswordProps } from "./InjectedResetPasswordProps";
import { withAccountApi } from "../../services/AccountApi";

interface IProps {
  history?: H.History;
}

type Props = InjectedResetPasswordProps & IProps;

interface State {
  password: string;
  confirm_pass: string;
  validationError: ValidationError | undefined;
}

class InnerResetPassForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: "",
      confirm_pass: "",
      validationError: undefined
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
  private async  _handleSubmit() {
    const { onPasswordReset } = this.props;
    const { password, confirm_pass } = this.state;

    const validationResult = resetPassFormValidate({
      password,
      confirm_pass
    });

    if (!!validationResult.error) this.setState({ validationError: validationResult.error });

    if (onPasswordReset) onPasswordReset(password);

    try {
      if (onPasswordReset && !validationResult.error) {
        await onPasswordReset(password);
        this.props.history!.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { validationError } = this.state;
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
            error={validationError}
          />
          <Input
            id="confirm_pass"
            inputLabel="Confirm Password"
            type="password"
            value={this.state.confirm_pass}
            onChange={this._handleChange}
            error={validationError}
          />
        </div>
        <div className="tc mt3">
          <Btn label="Reset Password" type="SECONDARY" onClick={this._handleSubmit} />
        </div>
      </div>
    );
  }
}

export const ResetPassForm = withAccountApi(InnerResetPassForm);
