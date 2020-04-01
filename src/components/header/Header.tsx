import React, { useState, Component } from "react";
import { Nav } from "../navbar/Nav";
import { NavLink, Link } from "react-router-dom";
import { InjectedHeaderProps } from "./InjectedHeaderProps";
import { withAuthApi } from "../../services/AuthApi";

interface IProps {}

type Props = IProps & InjectedHeaderProps;

class InnerHeader extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isLoggedIn, onLogout } = this.props;
    const navLinkClasses = "link dim dark-gray f6 f5-l pb1 dib mr3 mr4-l";
    const activeNavLinkClasses = "bb b--back";
    return (
      <Nav isLoggedIn={isLoggedIn!()}>
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
            onClick={() => onLogout!()}
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
  }
}

export const Header = withAuthApi(InnerHeader);
