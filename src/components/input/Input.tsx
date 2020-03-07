import React from "react";
import "./label.css";

interface Props {
  id: string;
  inputLabel: string;
  type: string;
  value: string | number | string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
}
interface State {
  inputValue: string;
  fieldActivate: boolean;
  inputRef: any;
}
// code partially extracted from: https://medium.com/@ilonacodes/creating-floating-label-placeholder-for-input-with-react-b912233b7005
export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: "",
      fieldActivate: false,
      inputRef: React.createRef()
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.activateField = this.activateField.bind(this);
    this.disableFocus = this.disableFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  private activateField() {
    this.setState({
      fieldActivate: true
    });
  }
  private disableFocus(e: React.FocusEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      this.setState({
        fieldActivate: false
      });
    }
  }

  private _handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    this.disableFocus(e);

    const { onBlur } = this.props;

    if (onBlur) onBlur(e)
  }
  updateInputValue(e: any) {
    this.props.onChange(e);
    this.activateField();
    e.preventDefault();
  }

  render() {
    const { inputLabel, type, id, value } = this.props;
    return (
      <div className="dib relative ma2">
        <label
          // check state the input, whether it is active then apply the class for floating label
          className={this.state.fieldActivate ? "field-active" : ""}
          onClick={() => {
            this.state.inputRef.current.focus();
          }}
        >
          {inputLabel}
        </label>
        <input
          id={id}
          ref={this.state.inputRef}
          className="floating-label input-reset ba b--black-20 pa2 mb2 db w-100"
          type={type}
          value={value}
          onFocus={this.activateField}
          onBlur={this._handleBlur}
          onChange={this.updateInputValue}
        />
      </div>
    );
  }
}
