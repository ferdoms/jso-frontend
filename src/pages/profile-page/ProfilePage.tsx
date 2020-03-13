import React from "react";
import Section from "../../components/section/Section";
import { SignupForm } from "../../components/signup-form/SignupForm";
import { ProfileForm } from "../../components/profile-form/ProfileForm";
import { UserDetailsDisplay } from "../../components/user- details-display/UserDetailsDisplay";
import Button from "../../components/button/Button";
import ProfileSubSection from "../../components/profile-subsection/ProfileSubSection";

export const ProfilePage: React.FC = () => {
  let userDetails = {
    fname: "Fernando",
    lname: "Marinho",
    email: "marinhosilva.fernando@gmail.com",
    profileImage: ""
  };
  let { profileImage, ...udRest } = userDetails;

  let rowClass = "pv1 pr3";
  let rowHeaderClass = rowClass + " black b";

  return (
    <Section className="pv6 ">
      <h2 className="f2 tc pb3 mv1 bb b--black-10">Profile</h2>
      <div className="pa3">
        <h4 className="f4 mb1 fw5">Image</h4>
        <div className="pa4">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 h3 w3 dib"
            alt="avatar"
          />
        </div>
        <h4 className="f4 mb1 fw5">Details</h4>

        <div className="bg-white " style={{ maxWidth: "24rem" }}>
          <div className="overflow-auto pv4">
            <table className="f6 w-100 mw8 center mb3" cellSpacing="0">
              <tbody className="lh-copy mid-gray ">
                <tr>
                  <td className={rowHeaderClass}>First Name</td>
                  <td className={rowClass}>{userDetails.fname}</td>
                </tr>
                <tr>
                  <td className={rowHeaderClass}>Last Name</td>
                  <td className={rowClass}>{userDetails.lname}</td>
                </tr>
                <tr>
                  <td className={rowHeaderClass}>Email </td>
                  <td className={rowClass}>{userDetails.email}</td>
                </tr>
              </tbody>
            </table>
            <Button label="Edit" type="SECONDARY" onClick={() => {}} />
          </div>
          <div>
            <h4 className="f4 mb1  fw5">Password</h4>
            <div className="pt4">
              <Button
                label="Change Password"
                type="GRAY"
                solid
                onClick={() => {}}
              />
            </div>
          </div>
          <ProfileSubSection title="Account">
          <Button
                label="DELETE"
                type="DANGER"
                solid
                onClick={() => {}}
              />

          </ProfileSubSection>
          
        </div>

        {/* <h4 className="f6 ttu gray">First Name</h4>
        <p className="f4 mv2">{userDetails.fname}</p>
        <h4 className="f5 mb1">First Name</h4>
        <p className="f4 mv2">{userDetails.fname}</p> */}
        {/* <ProfileForm /> */}
      </div>
    </Section>
  );
};
