import { UserSignupInterface } from "../../interfaces";

export interface InjectedSignupFormProps {
    onSubmit?: (user:UserSignupInterface) => void;
  }
  