import React from "react";

interface Props {
  display: {};
}

export class UserDetailsDisplay extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { display } = this.props;

    

    
    let trs = Object.keys(display).map(function(key) {
      // Using Number() to convert key to number type
      // Using obj[key] to retrieve key value
      return (
        <tr>
          <td className="pv3 pr3 bb b--black-20">{key}</td>
          {/* <td className="pv3 pr3 bb b--black-20">{display[`${key}`]}</td> */}
        </tr>
      );
    });
    for (let [key, value] of Object.entries(display)) {
      console.log(`${key}: ${value}`);
    }
    return <div className="overflow-auto">
    <table className="f6 w-100 mw8 center" cellSpacing="0">
      <tbody className="lh-copy">
        {trs}
      </tbody>
    </table>
  </div>;
  }
}
