import React from "react";

interface Props {
  // className?: string;
  // style?: React.CSSProperties;
  type: "PRIMARY" | "SECONDARY" | "DANGER" | "GRAY";
  solid?: boolean
  label: string;
  onClick: () => void;
}

class Button extends React.Component<Props, {}> {
  render() {
    const { type, label, onClick, solid } = this.props;

    let clName = "f6 link dim ph3 pv2 mb2 dib "
   solid ?
      (clName+="white bg-"+type.toLocaleLowerCase())
      :
      (clName+="ba "+type.toLocaleLowerCase())

    return (
      <a
        className={clName}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
}
export default Button;
