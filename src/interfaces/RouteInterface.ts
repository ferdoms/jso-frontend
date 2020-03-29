import { RouteComponentProps} from "react-router-dom";

export interface RouteInterface {
    path: string;
    key: string;
    exact?: true;
    component:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>;
    routes?: RouteInterface[];
  }