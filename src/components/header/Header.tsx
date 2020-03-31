import React, { useState } from "react";
import { Nav } from "../navbar/Nav";
import Button from "../button/Button";
import { NavLink, Link } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
}

export const Header: React.FC<Props> = props => {
  const { isLoggedIn } = props;
  const navLinkClasses = "link dim dark-gray f6 f5-l pb1 dib mr3 mr4-l";
  const activeNavLinkClasses = "bb b--back";

  return (
    <Nav isLoggedIn={isLoggedIn}>
      <Nav.PrivateItem>
        <NavLink
          className={navLinkClasses}
          activeClassName={activeNavLinkClasses}
          to="/dashboard"
          title="Dashboard"
        >
          Dashboard
        </NavLink>
      </Nav.PrivateItem>
      <Nav.PrivateItem>
        <NavLink
          className={navLinkClasses}
          activeClassName={activeNavLinkClasses}
          to="Settings"
          title="Settings"
        >
          Settings
        </NavLink>
      </Nav.PrivateItem>
      <Nav.PrivateItem>
        <a
          className={navLinkClasses}
          href="#"
          onClick={() => {}}
          title="Logout"
        >
          Logout
        </a>
      </Nav.PrivateItem>
      <Nav.GuestItem>
        <NavLink
          className={navLinkClasses}
          activeClassName={activeNavLinkClasses}
          to="/"
          exact={true}
          title="Home"
        >
          Home
        </NavLink>
      </Nav.GuestItem>
      <Nav.GuestItem>
        <NavLink
          className={navLinkClasses}
          activeClassName={activeNavLinkClasses}
          to="/about"
          title="About"
        >
          About
        </NavLink>
      </Nav.GuestItem>
      <Nav.GuestItem>
        <Link
          className="f6 black link dim ph3 pv2 ma2 dib bg-primary"
          to="/login"
          title="Login"
        >
          Login
        </Link>
        <Link
          className="f6 black link dim ph3 pv2 ma2 dib bg-primary"
          to="/signup"
          title="Sign up"
        >
          Sign up
        </Link>
      </Nav.GuestItem>
    </Nav>
  );
};

{
  /* <nav className="db dt-l w-100 border-box pv2 ph4 ph5-l bg-white-70 fixed">
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
  <a
    className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
    href="#"
    title="Home"
  >
    Home
  </a>
</div>
</nav> */
}
