import React from "react";

interface Props {
  title?: string;
}

class ProfileSubSection extends React.Component<Props, {}> {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h4 className="f4 mb1 fw5">{title}</h4>
        <div className="pt4">{children}</div>
      </div>
    );
  }
}
export default ProfileSubSection;
