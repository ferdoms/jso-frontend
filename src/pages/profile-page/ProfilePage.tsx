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
import { InputFile } from "../../components/input-file/InputFile";

interface IProps {
  history?: H.History;
}

type Props = InjectedProfilePageProps & IProps;

export const InnerProfilePage: React.FC<Props> = props => {
  // states
  const [isEditing, setIsEditing] = useState(false);

  const { userDetails } = props;

  const _handleDelete = async () => {
    await props.onDeleteAccount!(userDetails?.id!);
    props.history!.push("/");
  };
  const _handleUpdate = (user: UserAccountInterface) => {
    try {
      props.onUpdateUser!(user);
      setIsEditing(false);
    } catch (e) {
      console.log(e);
    }
  };
  const _handleImageProfileChange = (e: any) => {
    const encodedImage = e.target.files[0].name;

    // TODO encode file
    const updatedUser: UserAccountInterface = {
      id: userDetails!.id,
      fname: userDetails!.fname,
      lname: userDetails!.lname,
      email: userDetails!.email,
      profileImage: encodedImage
    };
    _handleUpdate(updatedUser);
  };

  if (!userDetails) throw new Error("No user Data");

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
              <InputFile
                label="Upload document"
                onChange={_handleImageProfileChange}
                accept=".png, .jpg, .jpeg"
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
                    _handleUpdate({
                      id: userDetails.id,
                      ...user,
                      profileImage: userDetails.profileImage
                    });
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
            <Button
              label="Change Password"
              type="GRAY"
              onClick={() => {
                props.history!.push("/resetpassword");
              }}
            />
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
