import React, { useState } from "react";
import Section from "../../components/section/Section";
import { ProfileForm } from "../../components/profile-form/ProfileForm";
import { UserDetailsDisplay } from "../../components/user- details-display/UserDetailsDisplay";
import Button from "../../components/button/Button";
import ProfileSubSection from "../../components/profile-subsection/ProfileSubSection";
import { withLayout } from "../withLayout";
import { withAccountApi } from "../../services/AccountApi";
import { InjectedProfilePageProps } from "./InjectedProfilePageProps";
import * as H from "history";
import { UserAccountInterface } from "../../interfaces";

interface IProps {
  history?: H.History;
}

type Props = InjectedProfilePageProps & IProps;

export const InnerProfilePage: React.FC<Props> = props => {
  // states
  const [isEditing, setIsEditing] = useState(false);

  const _handleDelete = () => {
    props.onDeleteAccount!();
    props.history!.push("/");
  };
  const _handleUpdate = (user: UserAccountInterface) => {
    props.onUpdateUser!(user);
  };

  const { userDetails } = props;

  if(!userDetails) throw new Error("No user Data")

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
                  userData={userDetails}
                  onSubmit={user => {
                    props.onUpdateUser!({id:userDetails.id, ...user});
                    setIsEditing(false);
                  }}
                />
              ) : (
                <>
                  <UserDetailsDisplay display={userDetails} />
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
            <Button label="Change Password" type="GRAY" onClick={() => {props.history!.push("/resetpassword")}} />
          </ProfileSubSection>
          <ProfileSubSection title="Account">
            <Button
              label="DELETE"
              type="DANGER"
              solid
              onClick={_handleDelete}
            />
          </ProfileSubSection>
        </div>
      </div>
    </Section>
  );
};

const ProfilePageWithAccountApi = withAccountApi(InnerProfilePage);
export const ProfilePage = withLayout(ProfilePageWithAccountApi);
