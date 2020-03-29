import { RouteComponentProps } from "react-router-dom";

export interface RouteInterface {
  path: string;
  key: string;
  exact?: boolean;
  isProtected: boolean;
  guestOnly: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  routes?: RouteInterface[];
}
