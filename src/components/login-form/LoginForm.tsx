import React from "react";
import Btn from "../button/Button";
import { Input } from "../input/Input";

interface Props {
  onLogin?: () => void;
}

export class LoginForm extends React.Component<Props, {}> {
  render() {
    return (
      <div className="w-100 tc pa3 ">
          <h2 className="f2">Login</h2>
          <div className="flex flex-column">
          <Input inputLabel="Email" type="text" />
          <Input inputLabel="Password" type="password" />
          </div>
          <Btn
            label="Login"
            type="SECONDARY"
            onClick={() => {
              console.log("click");
            }}
          />
        
      </div>
    );
  }
}
