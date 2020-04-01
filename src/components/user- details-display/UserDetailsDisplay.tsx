import React from "react";
import { UserAccountInterface } from "../../interfaces";

interface Props {
  display: UserAccountInterface
}

export class UserDetailsDisplay extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { display } = this.props;

    let rowClass = "pv1 pr3";
    let rowHeaderClass = rowClass + " black b";

    return (
      <table className="f6 w-100 mw8 center mb3" cellSpacing="0">
        <tbody className="lh-copy mid-gray ">
          <tr>
            <td className={rowHeaderClass}>First Name</td>
            <td className={rowClass}>{display.fname}</td>
          </tr>
          <tr>
            <td className={rowHeaderClass}>Last Name</td>
            <td className={rowClass}>{display.lname}</td>
          </tr>
          <tr>
            <td className={rowHeaderClass}>Email </td>
            <td className={rowClass}>{display.email}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
