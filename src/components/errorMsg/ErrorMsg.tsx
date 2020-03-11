import React from "react";

interface Props {
  text?: string;
}

class ErrorMsg extends React.Component<Props, {}> {
  render() {
    const { text} = this.props;
    return text ?
      (
      <p
        className="f6 dark-red mv0"
      >
        {text}
      </p>
    ):(<div/>)
  }
}
export default ErrorMsg;
