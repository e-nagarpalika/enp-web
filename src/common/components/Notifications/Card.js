/** @format */

import React from "react";
import { format } from "timeago.js";

const NotificationCard = ({ id, text, createdAt, issueId }) => {
  return (
    <div
      className="alert alert-secondary"
      role="alert"
      id={`notification-${id}`}
    >
      <div className="toast-header">
        <strong className="me-auto">Issue Id: {issueId}</strong>
        <small className="text-muted">{format(createdAt)}</small>
      </div>
      <div className="toast-body" style={{ color: "black" }}>
        {text}
        <a href={`/grievances/${issueId}`}>See More..</a>
      </div>
    </div>
  );
};

export default NotificationCard;
