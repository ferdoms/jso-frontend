import React, { createContext, useState } from "react";
import { Item } from "./Item";
import { PrivateItem } from "./PrivateItem";
import { GuestItem } from "./GuestItem";

interface INavComposition {
  Item: React.FC;
  PrivateItem: React.FC;
  GuestItem: React.FC;
}

interface INavContext {
  isLoggedIn: boolean;
}

interface INavProps {
  isLoggedIn: boolean;
}

export const NavContext = createContext<INavContext>({ isLoggedIn: false });

const Nav: React.FC<INavProps> & INavComposition = props => {
  const { isLoggedIn } = props;
  const [contextState] = useState({ isLoggedIn });
  return (
    <NavContext.Provider value={contextState}>
      <nav className="db dt-l w-100 border-box pv2 ph4 ph5-l bg-white-70 fixed z-5">
        <a
          className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
          href="#"
          title="Home"
        >
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="dib w2 h2 br-100"
            alt="Site Name"
          />
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          {props.children}
        </div>
      </nav>
    </NavContext.Provider>
  );
};

Nav.Item = Item;
Nav.PrivateItem = PrivateItem;
Nav.GuestItem = GuestItem;

export {Nav};