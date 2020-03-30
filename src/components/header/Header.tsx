import React, { useState } from "react";
import { Nav } from "../navbar/Nav";
import Button from "../button/Button";

interface Props {
  isLoggedIn:boolean;
}

export const Header: React.FC<Props> = (props) => {
  const {isLoggedIn} = props;

  return (
    <Nav isLoggedIn = {isLoggedIn}>
      <Nav.PrivateItem>
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#"
          title="Home"
        >
          Dashboard
        </a>
      </Nav.PrivateItem>
      <Nav.PrivateItem>
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#"
          title="Settings"
        >
          Settings
        </a>
      </Nav.PrivateItem>
      <Nav.PrivateItem>
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#"
          onClick={() => {}}
          title="Logout"
        >
          Logout
        </a>
      </Nav.PrivateItem>
      <Nav.GuestItem>
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#"
          title="Home"
        >
          Home
        </a>
      </Nav.GuestItem>
      <Nav.GuestItem>
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#"
          title="Home"
        >
          About
        </a>
      </Nav.GuestItem>
      <Nav.GuestItem>
        <Button label="Login" type="PRIMARY" onClick={()=>{}} />
        <a
          className="f6 black link dim ph3 pv2 ma2 dib bg-primary"
          href="#"
          title="Sign up"
        >
          Sign up
        </a>
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
