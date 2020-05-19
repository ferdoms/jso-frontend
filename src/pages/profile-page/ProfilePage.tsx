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

export const InnerProfilePage: React.FC<Props> = (props) => {
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
  const _handleImageProfileChange = async (e: any) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      const encodedImage =  await new Promise((resolve, reject) =>{
        reader.onload = function () {
          // console.log('load: ', reader.result);
          resolve(reader.result)
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
          reject(error)
        };
      })
      
      const updatedUser: UserAccountInterface = {
        id: userDetails!.id,
        fname: userDetails!.fname,
        lname: userDetails!.lname,
        email: userDetails!.email,
        profileImage: typeof encodedImage === "string" ? encodedImage : "",
      };
      await _handleUpdate(updatedUser);
    }
  };

  if (!userDetails) throw new Error("No user Data");

  return (
    <Section className="pv6 ">
      <h2 className="f2 tc pb3 mv1 bb b--black-10">Profile</h2>
      <div className="pa3">
        <ProfileSubSection title="Image">
          <div className="dib ph1 pv4 tc" style={{ width: "180px" }}>
            <img
              src={props.userDetails?.profileImage? props.userDetails?.profileImage :"http://tachyons.io/img/logo.jpg"}
              className="br-100 h4 w4 dib mb2"
              alt="avatar"
            />
            <div>
              <InputFile
                className="dib"
                label="Change Profile Picture"
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
                  onSubmit={(user) => {
                    _handleUpdate({
                      id: userDetails.id,
                      ...user,
                      profileImage: userDetails.profileImage,
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
