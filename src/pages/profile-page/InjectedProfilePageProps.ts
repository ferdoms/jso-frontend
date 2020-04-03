import { UserAccountInterface } from "../../interfaces";

export interface InjectedProfilePageProps {
  onDeleteAccount?: () => void;
  userDetails?: UserAccountInterface;
  onUpdateUser?: (user:UserAccountInterface) => {}
}
