import React, { Fragment, useEffect, useState } from "react";
import {
  Banner,
  Button,
  FlexGap,
  MainContainer,
  ProfileDetails,
  ProfileTop,
  Small,
  DetailTop,
  Avatar,
  Text,
  Header3,
  Details,
} from "../styled_components/components";
import { connect } from "react-redux";
import { getUser, getProfile } from "../../actions/userActions";
import { FaRegEdit } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import EditProfile from "./EditProfile";

const Profile = ({
  userData: { user, loader, profile },
  getUser,
  match: { params },
  getProfile,
}) => {
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  useEffect(() => {
    getProfile(params.id);
  }, [params]);

  return (
    <Fragment>
      {edit && <EditProfile setEdit={setEdit} />}
      <ProfileTop>
        <Banner>
          <img
            src={`${
              user && user.banner
                ? user.banner
                : "https://source.unsplash.com/random/1550x400"
            }`}
            alt=""
          />
        </Banner>

        <MainContainer>
          <ProfileDetails>
            <Fragment>
              <Details>
                <Avatar>
                  {profile && profile.avatar ? (
                    <img src={profile.avatar} alt="av" />
                  ) : (
                    <img
                      src="https://source.unsplash.com/random/400x400"
                      alt=""
                    />
                  )}
                </Avatar>
                <div>
                  <DetailTop>
                    <Header3 color="text4">
                      {profile && profile.username}
                    </Header3>
                    <FlexGap gap={20}>
                      <Text
                        size={14}
                        margin={"5px 0 0 0"}
                        weight={600}
                        color="text4"
                      >
                        300<Small color="text3"> Followers</Small>
                      </Text>
                      <Text
                        size={14}
                        margin={"5px 0 0 0 "}
                        weight={600}
                        color="text4"
                      >
                        250<Small color="text3"> Following</Small>
                      </Text>
                    </FlexGap>
                  </DetailTop>
                  <Text
                    color={"text3"}
                    margin={"15px 0"}
                    maxWidth={500}
                    size={15}
                  >
                    {profile && profile.bio}
                  </Text>
                </div>
              </Details>
            </Fragment>
            {user && user._id === params.id ? (
              <Button
                color="primary"
                padding={"6px 25px"}
                onClick={() => setEdit(true)}
              >
                <FaRegEdit /> Edit
              </Button>
            ) : (
              <Button color="primary" padding={"6px 25px"}>
                <RiUserAddFill /> Follow
              </Button>
            )}
          </ProfileDetails>
        </MainContainer>
      </ProfileTop>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps, { getUser, getProfile })(Profile);
