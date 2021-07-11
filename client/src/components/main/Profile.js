import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { getUser, getProfile, follow } from "../../actions/userActions";
import EditProfile from "./EditProfile";

const Profile = ({
  userData: { user, loader, profile },
  getUser,
  match: { params },
  getProfile,
  follow,
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
      {profile && (
        <div className="relative md:pt-64 sm:pt-52 pt-48">
          <img
            src={`${
              profile.banner
                ? profile.banner
                : "https://source.unsplash.com/random/1550x400"
            }`}
            alt=""
            className="h-60 w-full absolute left-0 mt-16 -top-1 object-cover"
          />
          <div className="max-w-9.7/10 sm:max-w-container m-auto sm:px-10">
            <div className="p-4 relative z-0 bg-white rounded-lg pb-7 shadow-1 w-full">
              <div className="flex md:justify-between md:flex-row flex-col items-center">
                <div className="flex gap-3  md:flex-row flex-col items-center">
                  <div className="p-1 bg-white rounded -mt-16 inline-block">
                    {profile && profile.avatar ? (
                      <img
                        src={profile.avatar}
                        alt="av"
                        className="h-32 w-32 rounded"
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/random/400x400"
                        alt=""
                        className="h-32 w-32 rounded"
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex md:gap-5 md:items-center md:flex-row flex-col gap-2 items-center">
                      <p className="font-poppins text-gray1 font-semibold text-xl">
                        {profile.username}
                      </p>
                      <div>
                        <p className="font-poppins text-gray1 font-semibold inline mr-1 text-sm">
                          100
                          <span className="font-poppins text-gray3 text-xs">
                            {" "}
                            Following
                          </span>
                        </p>
                        <p className="font-poppins text-gray1 font-semibold inline ml-1 text-sm">
                          5,004
                          <span className="font-poppins text-gray3 text-xs">
                            {" "}
                            Followers
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="max-w-md text-gray3 mt-4 md:text-left text-center">
                      {profile.bio}
                    </p>
                  </div>
                </div>
                {!user ? null : user._id === params.id ? (
                  <button
                    className="md:self-start md:mt-0 self-center mt-3  btn-2 w-24  "
                    onClick={() => setEdit(true)}
                  >
                    <i class="fas fa-edit"></i> Edit
                  </button>
                ) : profile && !profile.following ? (
                  <button
                    className="md:self-start md:mt-0 self-center mt-3  btn-2 w-24"
                    onClick={() => follow(profile._id)}
                  >
                    <i class="fas fa-user-plus"></i> Follow
                  </button>
                ) : profile && profile.following ? (
                  <button className="md:self-start md:mt-0  mt-3 btn-2 w-24 ">
                    <i class="fas fa-user-minus"></i> Unfollow
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps, { getUser, getProfile, follow })(
  Profile
);
