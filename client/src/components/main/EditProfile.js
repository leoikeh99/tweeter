import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Container,
  EditProfileCard,
  EditProfileWrapper,
  FlexGap,
  Header3,
  Input,
  Label,
  Overylay,
  Text,
} from "../styled_components/components";
import {
  FaTimes,
  FaRegUserCircle,
  FaLink,
  FaBookOpen,
  FaSave,
} from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { updateUser } from "../../actions/userActions";
import { validate } from "../../functions/mainFuctions";

const EditProfile = ({
  setEdit,
  userData: { user, loader, alert },
  updateUser,
  setAlert,
}) => {
  const [update, setUpdate] = useState(user);
  const [validation, setValidation] = useState(null);

  const onChange = (e) =>
    setUpdate({ ...update, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(validate(update));
    if (!validate(update).value) {
      setValidation(validate(update).msg);
    } else {
      updateUser(update);
    }
  };

  useEffect(() => {
    if (alert) {
      setAlert(alert);
    }
  }, [alert]);
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
            <form action="" onSubmit={submit}>
              <Label>Username</Label>
              <Input>
                <input
                  type="text"
                  value={update.username}
                  name="username"
                  onChange={onChange}
                  required
                />
                <FaRegUserCircle />
              </Input>
              <Label>Bio</Label>
              <Input>
                <textarea
                  type="text"
                  value={update.bio}
                  name="bio"
                  onChange={onChange}
                />
                <FaBookOpen />
              </Input>
              <Label>Location</Label>
              <Input>
                <input
                  type="text"
                  value={update.location}
                  name="location"
                  onChange={onChange}
                />
                <IoLocationOutline />
              </Input>
              <Label>Website</Label>
              <Input>
                <input
                  type="text"
                  value={update.website}
                  name="website"
                  onChange={onChange}
                />
                <FaLink />
              </Input>
              <div style={{ marginBottom: "5px" }}></div>
              {validation && (
                <Alert>
                  <Text>{validation}</Text>
                  <FaTimes onClick={() => setValidation(null)} />
                </Alert>
              )}
              <div style={{ marginBottom: "5px" }}></div>
              <Button>
                <FaSave /> Save
              </Button>
            </form>
          </Container>
        </EditProfileCard>
      </EditProfileWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps, { updateUser, setAlert })(EditProfile);
