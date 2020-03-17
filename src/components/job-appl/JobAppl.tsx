import React, { CSSProperties } from "react";
import { Transition } from "react-transition-group";
import Button from "../button/Button";

interface Props {}

interface State {
  isAdding: boolean;
}

const timeout: any = {
  appear: 200,
  enter: 30,
  exit: 200,
 }
const defaultStyle:CSSProperties = {
  transition: `transform 900ms`,
  
};
const transitionStyles: any = {
  entering: { transform: "translate3d(-100%, 0, 0)" },
  entered: {  },
  exiting: { },
  exited: { transform: "translate3d(100%, 0, 0)"}
};
class JobAppl extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isAdding: false
    };
    this._handleSearchChange = this._handleSearchChange.bind(this);
  }

  private _handleSearchChange(e: any) {
    let state: any = this.state;
    state[e.target.id] = e.target.value;
    this.setState(state);
  }

  render() {
    const { isAdding } = this.state;
    return (
      <div
        id="shadow"
        className="bg-mid-gray o-30 fixed h-100 w-100 top-0 left-0 z-999"
      >
        <Button
          solid
          type="DANGER"
          label="test"
          onClick={() => {
            console.log(!isAdding);
            this.setState({ isAdding: !isAdding });
          }}
        />

        <Transition in={isAdding} timeout={timeout}>
          {state => (
            <div
              className="bg-white ml7-m ml7-l"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              some
            </div>
          )}
        </Transition>
      </div>
    );
  }
}
export default JobAppl;
