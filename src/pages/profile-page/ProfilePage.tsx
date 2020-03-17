import React, { useState } from "react";
import Section from "../../components/section/Section";
import { ProfileForm } from "../../components/profile-form/ProfileForm";
import { UserDetailsDisplay } from "../../components/user- details-display/UserDetailsDisplay";
import Button from "../../components/button/Button";
import ProfileSubSection from "../../components/profile-subsection/ProfileSubSection";

export const ProfilePage: React.FC = () => {
  // states
  const [isEditing, setIsEditing] = useState(false);

  // ***** VERIFY THE POSSIBILITY TO MAKE userDetail A STATE OR UPDATE THROUGH A API CALL
  let userDetails = {
    fname: "Fernando",
    lname: "Marinho",
    email: "marinhosilva.fernando@gmail.com",
    profileImage: ""
  };

  let { profileImage, ...udRest } = userDetails;

  return (
    <Section className="pv6 ">
      <h2 className="f2 tc pb3 mv1 bb b--black-10">Profile</h2>
      <div className="pa3">
        <ProfileSubSection title="Image">
          <div className="pa4">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 h4 w4 dib mb2"
              alt="avatar"
            />
            <div>
              <Button
                label="Edit Profile Image"
                type="GRAY"
                solid
                onClick={() => {}}
              />
            </div>
          </div>
        </ProfileSubSection>

        <div className="bg-white " style={{ maxWidth: "24rem" }}>
          <ProfileSubSection title="Details">
            <div className="overflow-auto pb4">
              {isEditing ? (
                <ProfileForm
                  userData={udRest}
                  onSubmit={udUpdated => {
                    const { fname, lname, email } = udUpdated;
                    userDetails.fname = fname;
                    userDetails.lname = lname;
                    userDetails.email = email;
                    setIsEditing(false);
                  }}
                />
              ) : (
                <>
                  <UserDetailsDisplay display={udRest} />
                  <Button
                    label="Edit"
                    type="SECONDARY"
                    onClick={() => {
                      setIsEditing(true);
                    }}
                  />
                </>
              )}
            </div>
          </ProfileSubSection>
          <ProfileSubSection title="Password">
            <Button label="Change Password" type="GRAY" onClick={() => {}} />
          </ProfileSubSection>
          <ProfileSubSection title="Account">
            <Button label="DELETE" type="DANGER" solid onClick={() => {}} />
          </ProfileSubSection>
        </div>
      </div>
    </Section>
  );
};
