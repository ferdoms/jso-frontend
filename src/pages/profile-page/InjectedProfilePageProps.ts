import { UserAccountInterface } from "../../interfaces";

export interface InjectedProfilePageProps {
  onDeleteAccount?: (id: string) => void;
  userDetails?: UserAccountInterface;
  onUpdateUser?: (user:UserAccountInterface) => {}
}
