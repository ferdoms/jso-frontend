import React, { Component, ComponentType } from "react";
import ValidationErrorMsg from "./ValidationErrorMsg";
import { ValidationError } from "@hapi/joi";

interface IProps {
  error?: ValidationError | undefined;
  displayError?: "UNDER" | "RIGHT";
  id: string;
}

export const withValidationErrorMsg = <P extends object>(
  WrappedComponent: ComponentType<P>
) =>
  class withValidationErrorMsg extends Component<P & IProps> {
    constructor(props: P & IProps) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }
    render() {
      const { error, displayError, ...props } = this.props;

      // extract the name of the attibute that dind't pass on validation
      const path = error ? error?.details[0].path[0] : undefined;
      // compare with the id of the wrapped component with the invalid attribute
      const match = this.props.id == path
      
      return (
        <>
          <WrappedComponent
            {...(props as P)}
            className={match ? "b--red" : ""}
          />
          <ValidationErrorMsg error={match ? error : undefined} />
        </>
      );
    }
  };
