import React from "react";

interface Props {
  // className?: string;
  // style?: React.CSSProperties;
  type: "PRIMARY" | "SECONDARY" | "DANGER";
  label: string;
  onClick: () => void;
}

class Button extends React.Component<Props, {}> {
  render() {
    const { type, label, onClick } = this.props;
    return (
      <a
        className={"f6 link dim ph3 pv2 mb2 dib white bg-"+type.toLocaleLowerCase()}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
}
export default Button;
