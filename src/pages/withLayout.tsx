import React, { Component, ComponentType } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const withLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
) =>
  class withLayout extends Component<P> {
    constructor(props: P) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }
    render() {
      const { ...props } = this.props;
      console.log(props);
      return (
        <>
          <Header />
          <WrappedComponent {...(props as P)} />
          <Footer />
        </>
      );
    }
  };
