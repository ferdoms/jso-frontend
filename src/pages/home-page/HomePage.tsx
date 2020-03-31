import React from "react";
import Section from "../../components/section/Section";
import { withLayout } from "../withLayout";

const InnerHomePage: React.FC = () => {
  return (
    <Section className="pv6">
      <div className="center bg-white" style={{ maxWidth: "24rem" }}>
        <h1 className="tc">
          Welcome to JobSeeker Organizer!
        </h1>
      </div>
    </Section>
  );
};

export const HomePage = withLayout(InnerHomePage);
  