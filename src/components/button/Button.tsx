import React from "react";

interface Props {
  // className?: string;
  // style?: React.CSSProperties;
  type: "PRIMARY" | "SECONDARY" | "DANGER" | "GRAY";
  solid?: boolean;
  circle?: boolean;
  label: string;
  icon?: string;
  onClick: () => void;
}

class Button extends React.Component<Props, {}> {
  render() {
    const { type, label, onClick, solid, circle, icon } = this.props;

    let clName = "f6 link dim ph3 pv2 mb2 dib ";

    // if solid attribuite is true add classes to make the button solid
    solid
      ? (clName += "white bg-" + type.toLocaleLowerCase())
      : (clName += "ba " + type.toLocaleLowerCase());

    // if solid attribuite is true add classes to make the button solid
    if (circle) clName += " br-100";

    return (
      <a className={clName} onClick={onClick}>
        {(icon)?<i className={icon}></i>:""}
        {label}
      </a>
    );
  }
}
export default Button;
