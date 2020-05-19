import React from "react";
import Section from "../../components/section/Section";
import { withLayout } from "../withLayout";
import { Link } from "react-router-dom";

const InnerHomePage: React.FC = () => {
  return (
    <>
    <Section className="pt5">
      <div
        className="contain bg-center bg-right-ns"
        style={{
          backgroundImage: "url(img/business.jpg)",
        }}
      >
        <div className="pb5 pb6-m pb7-l">
          <div className="mt4 mt5-m mt6-l ph3 dib bg">
            <div className="bg-white-80">
              <h1 className="">Welcome to JobSeekerOrganizer!</h1>
              <p>Organize your search.</p>
              <Link
                className="f6 black link dim ph3 pv2 ma2 dib bg-primary"
                to="/signup"
                title="Sign up"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
    
  );
};

export const HomePage = withLayout(InnerHomePage);
