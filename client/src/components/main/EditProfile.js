import React, { useEffect, useState } from "react";
import { Alert, Text, Loader } from "../styled_components/components";
import { FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { updateUser, clearAlert } from "../../actions/userActions";
import { validate } from "../../functions/mainFuctions";

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
      <div className="fixed w-full h-screen bg-black opacity-70 z-20" />
      <div className="w-full h-screen flex items-center justify-center fixed z-30">
        <div className="bg-white max-w-9/10 mmd:max-w-xl w-card h-card overflow-y-scroll rounded-t pb-3">
          <div className="px-4 py-3 flex items-center justify-between sticky top-0 left-0 bg-white z-50 border-b-2 border-gray">
            <p className="font-semibold text-gray1">Edit Profile</p>
            <i
              className="fas fa-times cursor-pointer"
              onClick={() => setEdit(null)}
            />
          </div>
          <hr />

          <div className="w-full h-28 sm:h-36 relative flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
            {!showBanner ? (
              <div></div>
            ) : !selectedBanner && !user.banner ? (
              <img
                src="https://source.unsplash.com/random/1550x400"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            ) : !selectedBanner && user.banner ? (
              <img
                src={user.banner}
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></img>
            ) : (
              <img
                src={selectedBanner}
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></img>
            )}
            <div className="z-20 flex items-center gap-10">
              <i
                className="fas fa-camera text-white cursor-pointer"
                onClick={selectBanner}
              />
              <i
                className="fas fa-times text-white cursor-pointer"
                onClick={() => {
                  setSelectedBanner(null);
                  setShowBanner(false);
                }}
              />
            </div>
          </div>
          <div className="max-w-9.5/10 m-auto">
            <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 -mt-12 z-30 rounded-full border-4 border-white">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-40 rounded-full"></div>
              {!selectedAvatar && !user.avatar ? (
                <img
                  src="https://source.unsplash.com/random/400x400"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
                />
              ) : !selectedAvatar && user.avatar ? (
                <img
                  src={user.avatar}
                  className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
                ></img>
              ) : (
                <img
                  src={selectedAvatar}
                  className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
                ></img>
              )}
              <i
                className="fas fa-camera text-white cursor-pointer z-50"
                onClick={selectAvatar}
              />
            </div>
            <br />
            <form action="" onSubmit={submit}>
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={avatarInputChange}
                className="h-0 w-0 overflow-hidden"
              ></input>
              <input
                type="file"
                name="banner"
                id="banner"
                onChange={bannerInputChange}
                className="h-0 w-0 overflow-hidden"
              ></input>
              <label className="label">Username</label>
              <div className=" mb-3 input-cover">
                <input
                  type="text"
                  value={update.username}
                  name="username"
                  onChange={onChange}
                  required
                  className="h-11 w-11/12"
                />
                <i className="fas fa-user-circle text-gray4 text-xl" />
              </div>
              <label className="label">Bio</label>
              <div className=" mb-3 input-cover py-1">
                <textarea
                  type="text"
                  value={update.bio}
                  name="bio"
                  onChange={onChange}
                  className="h-24 w-11/12"
                />
                <i className="fas fa-book-open text-gray4 text-xl" />
              </div>
              <label className="label">Location</label>
              <div className=" mb-3 input-cover">
                <input
                  type="text"
                  value={update.location}
                  name="location"
                  onChange={onChange}
                  className="h-11 w-11/12"
                />
                <i className="fas fa-map-marker-alt text-gray4 text-xl" />
              </div>
              <label className="label">Website</label>
              <div className=" mb-3 input-cover">
                <input
                  type="text"
                  value={update.website}
                  name="website"
                  onChange={onChange}
                  className="h-11 w-11/12"
                />
                <i className="fas fa-link text-gray4 text-xl" />
              </div>
              <div style={{ marginBottom: "5px" }}></div>
              {validation && (
                <Alert>
                  <Text>{validation}</Text>
                  <FaTimes onClick={() => setValidation(null)} />
                </Alert>
              )}
              <div style={{ marginBottom: "5px" }}></div>
              <button className="py-2.5 px-3.5 flex items-center justify-center gap-2 bg-primary text-white rounded">
                {loader.type === "update" ? (
                  <Loader>
                    <i class="fas fa-circle-notch animate-spin"></i>
                  </Loader>
                ) : (
                  <i class="fas fa-save"></i>
                )}{" "}
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps, {
  updateUser,
  setAlert,
  clearAlert,
})(EditProfile);
