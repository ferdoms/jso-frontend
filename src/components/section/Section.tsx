import React from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

class Section extends React.Component<Props, {}> {
  render() {
    const { children, style, className } = this.props;

    return (
      <div
        className={
          "mw-5 mw8-ns center pa3 ph2-ns " + (className ? className : "")
        }
        style={style}
      >
        {children}
      </div>
    );
  }
}
export default Section;
