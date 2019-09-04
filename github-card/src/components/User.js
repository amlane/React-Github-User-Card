import React from "react";
import axios from "axios";
import Followers from "./Followers";
import "../App.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://api.github.com/users/amlane")
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/amlane/followers")
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { user } = this.state;
    const { followers } = this.state;
    return (
      <div className="container">
        <section className="user-card">
          <img src={user.avatar_url} className="profile-pic" alt={user.name} />
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank">
            My Github Profile
          </a>
        </section>
        <section className="followers">
          <p>My Followers:</p>
          {followers.map(follower => {
            return <Followers follower={follower} />;
          })}
        </section>
      </div>
    );
  }
}

export default User;
