import React from "react";

interface Props {
  type:
    | "PRIMARY"
    | "SECONDARY"
    | "DANGER"
    | "GRAY"
    | "ACTIVE-SKIN"
    | "INTERVIEW-SKIN"
    | "FOLLOWUP-SKIN"
    | "ARCHIVED-SKIN";
  solid?: boolean;
  circle?: boolean;
  label: string;
  icon?: string;
  color?: string;
  onClick: () => void;
}

class Button extends React.Component<Props, {}> {
  render() {
    const { type, label, onClick, solid, circle, icon, color } = this.props;
 
    let clName = `f6 link dim ph3 pv2 mb2 dib ${color} `;

    // if solid attribuite is true add classes to make the button solid
    solid
      ? (clName += "bg-" + type.toLocaleLowerCase())
      : (clName += "ba " + type.toLocaleLowerCase());

    if (circle) clName += " br-100";

    return (
      <a className={clName} onClick={onClick}>
        {icon ? <i className={icon}></i> : ""}
        {label}
      </a>
    );
  }
}
export default Button;
