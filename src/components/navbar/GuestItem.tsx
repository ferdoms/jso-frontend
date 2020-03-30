import React, { useContext } from "react";
import { NavContext } from "./Nav";
import { Item } from "./Item";

export const GuestItem: React.FC = props => {
  const { isLoggedIn } = useContext(NavContext);
  if (!isLoggedIn) return <Item {...props} />;

  return <></>;
};

