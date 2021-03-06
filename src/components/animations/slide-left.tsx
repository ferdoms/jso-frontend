import React, { SFC, ReactNode, CSSProperties } from "react";
import { Transition } from "react-transition-group";

const duration: any = {
  appear: 200,
  enter: 80,
  exit: 1000
};

const defaultStyle: CSSProperties = {
  transition: `transform 1000ms`,
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%"
};
const transitionStyles: any = {
  entering: { transform: "translate( -100% ,0)" },
  entered: {},
  exiting: { transform: "translate( 100%, 0)" },
  exited: { transform: "translate( 100%, 0)" }
};
interface Props {
  in: boolean;
  children: ReactNode;
  className?: string;
}

export const SlideLeft: SFC<Props> = props => (
  <Transition
    in={props.in}
    timeout={duration}
    mountOnEnter
    unmountOnExit
    onEnter={node => node.offsetHeight}
  >
    {state => (
      <div
        className={props.className}
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
