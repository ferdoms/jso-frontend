import { UserLoginInterface } from "../../interfaces/UserLoginInterface";

export interface InjectedLoginFormProps {
    onLogin?: (user:UserLoginInterface) => void;
  }
  