import React, { ReactNode } from "react";
import "./combobox.css";
import ErrorMsg from "../errorMsg/ErrorMsg";

interface Props {
  id: string;
  value: string | number | string[] | undefined;
  onChange: (v: string) => void;
  options: string[];
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
interface State {
  value: string;
}
// code partially extracted from: https://medium.com/@ilonacodes/creating-floating-label-placeholder-for-input-with-react-b912233b7005
export class Combobox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this._stringHelper(props.options[0])
    };

    this.updateComboValue = this.updateComboValue.bind(this);
  }

  updateComboValue(e: any) {
    
    let v:string = this._stringHelper(e.target.value)
    console.log(v)
    this.setState({value: v})
    this.props.onChange(v);
    e.preventDefault();
  }
  private _stringHelper (str:string) {
    return (str.charAt(0).toLowerCase() + str.substr(1)).replace(/\s/g, "")
}

  render() {
    const { id, options } = this.props;
    const { value } = this.state;
    
    return (
      <div className="dib relative mv2">
        <select
          id={id}
          className="ba b--black-20 pa2 mb2 db bg-white"
          onChange={this.updateComboValue}
        >
          {options.map((item:string, index:number) => {
            return (
              <option key={index} value={this._stringHelper(item)}>
                {value === this._stringHelper(item) ? "Sort by: " + item : item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
