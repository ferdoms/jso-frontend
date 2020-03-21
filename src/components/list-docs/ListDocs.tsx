import React from "react";
import { DocumentInterface } from "../../interfaces/DocumentInterface";

interface Props {
  docsList: DocumentInterface[];
  onClick: (document: DocumentInterface) => void;
}

/**
 * Renders a list of LogDisplay components given list of logs
 */
class ListDocs extends React.Component<Props, {}> {
  private _onClick(document: DocumentInterface) {}
  render() {
    const { docsList } = this.props;

    // maps list of logs into a LogDisplay component
    return docsList.map((item: DocumentInterface, index: number) => {
      return (
        <a
          key={index}
          className="dt pb2 mb2 f7 bb b--light-gray w-100"
          onClick={() => {
            this.props.onClick(item);
          }}
        >
          {item.name + "." + item.extension}
        </a>
      );
    });
  }
}
export default ListDocs;
