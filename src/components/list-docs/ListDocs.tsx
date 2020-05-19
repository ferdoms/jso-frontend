import React from "react";
import { DocumentInterface } from "../../interfaces/DocumentInterface";
import { InjectedListDocsProps } from "./InjectedListDocsProps";
import { withJobApplicationsApi } from "../../services/JobApplicationsApi";

interface IProps {
  docsList: DocumentInterface[];
}
type Props = InjectedListDocsProps & IProps;

/**
 * Renders a list of LogDisplay components given list of logs
 */
class InnerListDocs extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }
  private async _onClick(document: DocumentInterface) {
  const d:any =  await this.props.downloadFiles!(document);

    console.log(URL.createObjectURL(d))
    
        window.open(URL.createObjectURL(d));
   
  }
  render() {
    const { docsList } = this.props;

    // maps list of logs into a LogDisplay component
    return docsList.map((item: DocumentInterface, index: number) => {
      return (
        <a
          key={index}
          className="dt pb2 mb2 f7 bb b--light-gray w-100 dim"
          onClick={()=>this._onClick(item)}
        >
          {item.name}
        </a>
      );
    });
  }
}
export const ListDocs = withJobApplicationsApi(
  InnerListDocs
);
