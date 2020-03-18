import React, { SFC, ReactNode, CSSProperties } from "react";
import { Transition } from "react-transition-group";

const duration: any = {
  appear: 200,
  enter: 80,
  exit: 100
};

const defaultStyle: CSSProperties = {
  transition: `transform 900ms`,
  position: "fixed",
  top: 0,
  right:0,
  width:"100%",
  height: "100%"
};
const transitionStyles: any = {
  entering: { transform: "translate( -100% ,0)" },
  entered: {},
  exiting: {},
  exited: { transform: "translate( 100%, 0)" }
};
interface Props {
  in: boolean;
  children: ReactNode;
}

export const SlideLeft: SFC<Props> = props => (
  <Transition
    in={props.in}
    timeout={duration}
    mountOnEnter
    // unmountOnExit
    onEnter={node => node.offsetHeight}
  >
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        {props.children}
      </div>
    )}
  </Transition>
);
