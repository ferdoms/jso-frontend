import React, { ReactNode } from "react";
import { Transition } from "react-transition-group";

const duration = 400;
const defaultStyle = {
  transition: `opacity 400ms ease-in-out`,
  opacity: 0
};

const transitionStyles: any = {
  entering: { opacity: 0.3 },
  entered: { opacity: 0.3 }
};

interface Props {
  in: boolean;
  children: ReactNode;
  onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
  className?: string;
}

export const FadeIn: React.FC<Props> = props => (
  <Transition
    in={props.in}
    timeout={duration}
    mountOnEnter
    unmountOnExit
    onEnter={node => node.offsetHeight}
    onEntered={props.onEntered}
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
