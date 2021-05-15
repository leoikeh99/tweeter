import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/userActions";

const Timeline = ({ userData: { user, loader }, getUser }) => {
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);
  return <div>Timeline</div>;
};

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps, { getUser })(Timeline);
