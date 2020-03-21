import React, { ReactNode } from "react";
import "./label.css";
import ErrorMsg from "../errorMsg/ErrorMsg";

interface Props {
  id: string;
  inputLabel: string;
  value: string | number | string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event?: React.FocusEvent<HTMLTextAreaElement>) => void;
  errComponent?: ReactNode;
  disabled?: boolean;
}
interface State {
  inputValue: string;
  fieldActivate: boolean;
  inputRef: any;
}
// code partially extracted from: https://medium.com/@ilonacodes/creating-floating-label-placeholder-for-input-with-react-b912233b7005
export class TextArea extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: "",
      fieldActivate: props.value === "" ? false : true,
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
  private disableFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    if (e.target.value === "") {
      this.setState({
        fieldActivate: false
      });
    }
  }

  private _handleBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.disableFocus(e);

    const { onBlur } = this.props;

    if (onBlur) onBlur(e);
  }

  updateInputValue(e: any) {
    this.props.onChange(e);
    this.activateField();
    e.preventDefault();
  }

  render() {
    const { inputLabel, id, value, errComponent, disabled } = this.props;
    return (
      <div className="dib relative mv2">
        <label
          // check state the input, whether it is active then apply the class for floating label
          className={this.state.fieldActivate ? "field-active" : ""}
          onClick={() => {
            this.state.inputRef.current.focus();
          }}
        >
          {inputLabel}
        </label>
        <textarea
          
          style={{resize:"vertical"}}
          id={id}
          ref={this.state.inputRef}
          className="h5 floating-label input-reset ba b--black-20 pa2 mb2 db w-100"
          value={value}
          onFocus={this.activateField}
          onBlur={this._handleBlur}
          onChange={this.updateInputValue}
          disabled={disabled}
        />
        {errComponent ? errComponent : ""}
      </div>
    );
  }
}
