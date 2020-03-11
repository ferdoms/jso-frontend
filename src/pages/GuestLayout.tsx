import React from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";

class GuestLayout extends React.Component {
  render() {
    return <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>;
  }
}
export default GuestLayout;
