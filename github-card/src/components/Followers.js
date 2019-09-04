import React from "react";
import "../App.css";

function Followers(props) {
  return (
    <div className="follower-card">
      <img
        src={props.follower.avatar_url}
        className="follower-pic"
        alt={props.follower.login}
      />
      <p>{props.follower.login}</p>
    </div>
  );
}

export default Followers;
