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
  Loader,
  FileInput,
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
import { updateUser, clearAlert } from "../../actions/userActions";
import { validate } from "../../functions/mainFuctions";
import { RiLoader3Fill } from "react-icons/ri";

const EditProfile = ({
  setEdit,
  userData: { user, loader, alert },
  updateUser,
  setAlert,
  clearAlert,
}) => {
  const [update, setUpdate] = useState(user);
  const [validation, setValidation] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const onChange = (e) =>
    setUpdate({ ...update, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!validate(update).value) {
      setValidation(validate(update).msg);
    } else {
      updateUser({
        ...update,
        newAvatar: selectedAvatar,
        newBanner: selectedBanner,
        removeBanner: !showBanner,
      });
    }
  };

  const selectAvatar = () => document.getElementById("avatar").click();
  const selectBanner = () => document.getElementById("banner").click();

  const avatarInputChange = (e) => {
    const avatar = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onloadend = () => setSelectedAvatar(reader.result);
  };

  const bannerInputChange = (e) => {
    const banner = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(banner);
    reader.onloadend = () => setSelectedBanner(reader.result);
  };

  useEffect(() => {
    if (alert) {
      setAlert(alert);
      clearAlert();
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
            {!showBanner ? (
              <div></div>
            ) : !selectedBanner && !user.banner ? (
              <img src="https://source.unsplash.com/random/1550x400" alt="" />
            ) : !selectedBanner && user.banner ? (
              <img src={user.banner}></img>
            ) : (
              <img src={selectedBanner}></img>
            )}
            <div className="icons">
              <FlexGap gap={30}>
                <FiCamera onClick={selectBanner} />
                <FaTimes
                  onClick={() => {
                    setSelectedBanner(null);
                    setShowBanner(false);
                  }}
                />
              </FlexGap>
            </div>
          </div>
          <Container mw={95}>
            <div className="avatar">
              <div className="overlay"></div>
              {!selectedAvatar && !user.avatar ? (
                <img src="https://source.unsplash.com/random/400x400" alt="" />
              ) : !selectedAvatar && user.avatar ? (
                <img src={user.avatar}></img>
              ) : (
                <img src={selectedAvatar}></img>
              )}
              <FiCamera onClick={selectAvatar} />
            </div>
            <br />
            <form action="" onSubmit={submit}>
              <FileInput
                type="file"
                name="avatar"
                id="avatar"
                onChange={avatarInputChange}
              ></FileInput>
              <FileInput
                type="file"
                name="banner"
                id="banner"
                onChange={bannerInputChange}
              ></FileInput>
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
                {loader.type === "update" ? (
                  <Loader>
                    <RiLoader3Fill />
                  </Loader>
                ) : (
                  <FaSave />
                )}{" "}
                Save
              </Button>
            </form>
          </Container>
        </EditProfileCard>
      </EditProfileWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps, {
  updateUser,
  setAlert,
  clearAlert,
})(EditProfile);
