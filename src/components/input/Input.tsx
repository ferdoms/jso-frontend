import React from "react";
import "./label.css";

interface Props {
  inputLabel: string;
  type:string;
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
}
   

    this.updateInputValue = this.updateInputValue.bind(this);
    this.activateField = this.activateField.bind(this);
    this.disableFocus = this.disableFocus.bind(this);
  }

  private activateField() {
    this.setState({
      fieldActivate: true
    });
    
  }
  private disableFocus(e: any) {
    if (e.target.value === "") {
      this.setState({
        fieldActivate: false
      });
    }
  }
  updateInputValue(e: any) {
    this.setState({
      inputValue: e.target.value
    });
    this.activateField();
    e.preventDefault();
  }

  render() {
    const { inputLabel, type } = this.props;
    return (
      <div className="dib relative ma2">
        <label
          // check state the input, whether it is active then apply the class for floating label
          className={this.state.fieldActivate ? "field-active" : ""}
          onClick={()=>{this.state.inputRef.current.focus()}}
          
        >
          {inputLabel}
        </label>
        <input
          ref={this.state.inputRef}
          className="floating-label input-reset ba b--black-20 pa2 mb2 db w-100"
          type={type}
          value={this.state.inputValue}
          onFocus={this.activateField}
          onBlur={this.disableFocus}
          onChange={this.updateInputValue}
        />
        
      </div>
    );
  }
}
