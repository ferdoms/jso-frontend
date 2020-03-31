import React, { Component, ComponentType } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

interface ILayoutProps {
  isLoggedIn: boolean;
}

export const withLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
) =>
  class withLayout extends Component<P & ILayoutProps> {
    constructor(props: P & ILayoutProps) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }
    render() {
      const { isLoggedIn, ...props } = this.props;
      return (
        <>
          <Header />
          <div className="z-0">
            <WrappedComponent {...(props as P)} />
          </div>
          <Footer />
        </>
      );
    }
  };
