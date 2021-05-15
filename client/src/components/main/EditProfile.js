import React from "react";
import {
  Container,
  EditProfileCard,
  EditProfileWrapper,
  FlexGap,
  Header3,
  Input,
  Label,
  Overylay,
} from "../styled_components/components";
import { FaTimes, FaRegUserCircle, FaLink, FaBookOpen } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const EditProfile = ({ setEdit }) => {
  return (
    <div>
      <Overylay />
      <EditProfileWrapper>
        <EditProfileCard>
          <div className="header">
            <Header3 color={"text4"}>Edit Profile</Header3>
            <FaTimes onClick={() => setEdit(null)} />
          </div>
          <hr />

          <div className="banner">
            <div className="overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1620881214599-9bfcbed0acfb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70"
              alt=""
            />
            <div className="icons">
              <FlexGap gap={30}>
                <FiCamera />
                <FaTimes />
              </FlexGap>
            </div>
          </div>
          <Container mw={95}>
            <div className="avatar">
              <div className="overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1600002716779-8ea1365b931d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
              <FiCamera />
            </div>
            <br />
            <form action="">
              <Label>Name</Label>
              <Input>
                <input type="text" />
                <FaRegUserCircle />
              </Input>
              <Label>Bio</Label>
              <Input>
                <textarea type="text" />
                <FaBookOpen />
              </Input>
              <Label>Location</Label>
              <Input>
                <input type="text" />
                <IoLocationOutline />
              </Input>
              <Label>Website</Label>
              <Input>
                <input type="text" />
                <FaLink />
              </Input>
            </form>
          </Container>
        </EditProfileCard>
      </EditProfileWrapper>
    </div>
  );
};

export default EditProfile;
