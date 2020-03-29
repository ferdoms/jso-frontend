import React from "react";
import "./input-file.css";

interface Props {
  onChange: (e: any) => void;
  label: string;
  icon?: string;
  multiple?: boolean;
  accept?: string | undefined;
  className?: string | undefined;
}
interface State {
  filesCount: number;
  fileName: string;
}

export class InputFile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      filesCount: 0,
      fileName: ""
    };
    this._handleChange = this._handleChange.bind(this);
  }

  private _handleChange(e: any) {
    let filesCount = e.target.files.length;

    this.setState({ filesCount });

    if (filesCount === 1) this.setState({ fileName: e.target.files[0].name });

    this.props.onChange(e);
  }
  private _renderLabel() {
    const { filesCount, fileName } = this.state;
    const { label } = this.props;

    if (filesCount > 1) {
      return `${filesCount} file(s) selected`;
    } else if (filesCount === 1) {
      return fileName;
    }
    return label;
  }
  render() {
    const { icon, className, ...rest } = this.props;
    return (
      <div className="relative">
        <input
          className="inputfile"
          id="uploadDoc"
          name="uploadDoc"
          type="file"
          {...rest}
          onChange={this._handleChange}
        />
        <label
          className={
            "f6 black link dim ph3 pv2 mb2 dib bg-primary w-100 truncate tc " +
            className
          }
          htmlFor="uploadDoc"
        >
          {icon ? <i className={icon} /> : <></>}
          {this._renderLabel()}
        </label>
      </div>
    );
  }
}
