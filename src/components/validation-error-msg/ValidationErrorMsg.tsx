import React from "react";
import { ValidationError } from "@hapi/joi";
import { errorsDictionary } from "../../dictionaries/ErrorDictionaries";
import ErrorMsg from "../errorMsg/ErrorMsg";

interface Props {
  error: ValidationError | undefined;
}

class ValidationErrorMsg extends React.Component<Props, {}> {
  render() {
    if (this.props.error) {
      const { path, type } = this.props.error!.details[0];
      const key: string =`${path[0]}.${type}`;

      const errorMsg: string | undefined = errorsDictionary[`${key}`];

      if(!errorMsg) throw new Error(`"${key}" not found in error errorsDictionary.`)

      return <ErrorMsg text={errorMsg} />;
    }
    return <></>
  }
}
export default ValidationErrorMsg;
