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
import { getUser } from "../../actions/userActions";
import { FaRegEdit } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import EditProfile from "./EditProfile";

const Profile = ({
  userData: { user, loader },
  getUser,
  match: { params },
}) => {
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <Fragment>
      {edit && <EditProfile setEdit={setEdit} />}
      <ProfileTop>
        <Banner>
          <img
            src="https://images.unsplash.com/photo-1620881214599-9bfcbed0acfb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70"
            alt=""
          />
        </Banner>

        <MainContainer>
          <ProfileDetails>
            <Fragment>
              <Details>
                <Avatar>
                  <img
                    src="https://images.unsplash.com/photo-1600002716779-8ea1365b931d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                    alt="av"
                  />
                </Avatar>
                <div>
                  <DetailTop>
                    <Header3 color="text4">Leonard Ikeh</Header3>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit laborum natus minus excepturi dicta.
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

export default connect(mapStateToProps, { getUser })(Profile);
