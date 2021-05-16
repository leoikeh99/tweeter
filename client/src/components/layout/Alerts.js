import React from "react";
import { connect } from "react-redux";
import { Alert2, AlertsView } from "../styled_components/components";
import { FiAlertCircle } from "react-icons/fi";

const Alerts = ({ alerts }) => {
  return (
    <AlertsView>
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <Alert2 key={alert.id} className="alert" color={alert.type}>
            <FiAlertCircle /> {alert.msg}
          </Alert2>
        ))}
    </AlertsView>
  );
};

const mapStateToProps = (state) => ({ alerts: state.alerts });

export default connect(mapStateToProps, null)(Alerts);
