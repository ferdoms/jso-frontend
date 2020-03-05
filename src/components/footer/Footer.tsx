import React from "react";
import Section from "../section/Section";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-moon-gray">
      <Section>
        <div className="flex flex-wrap justify-around">
          <div className=" pa3 ma2">
            <ul>
              <li><a>JobSeekerOrganizer</a></li>
              <li>About us</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
          <div className="debug-grid pa3 ma2">
            <ul>
              <li>JobSeekerOrganizer</li>
              <li>About us</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
          <div className="debug-grid pa3 ma2">
            <ul>
              <li>JobSeekerOrganizer</li>
              <li>About us</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </Section>
    </footer>
  );
};
