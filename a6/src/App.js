import React, { useEffect, useState } from "react";

import "./App.css";

import {
  fetchFollowingUsers,
  followUser,
  unFollowUser,
} from "./util/FollowingUsersHelper";
import { fetchOrganizationUsers } from "./util/RedditHelper";

import Users from "./Users";

function App() {
  const organization = "kubernetes";
  const [users, setUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);

  // # Effects
  useEffect(() => {
    fetchFollowingUsers().then(response => {
      setFollowingUsers(response);
    });

    fetchOrganizationUsers(organization).then(response => setUsers(response));
  }, [organization]);

  function handleFollowUser(userId) {
    followUser(userId);
    setFollowingUsers(followingUsers.concat({ id: userId }));
  }

  function handleUnFollowUser(userId) {
    unFollowUser(userId);
    setFollowingUsers(followingUsers.filter(({ id }) => id !== userId));
  }

  return (
    <div id="main-container" className="ui text container">
      <h1 className="ui header">
        Assignment 6
        <div className="sub header">ITP 404 Fall 2020 - Neuton Foo</div>
      </h1>
      <div class="ui huge breadcrumb">
        <div class="section">GitHub</div>
        <span class="divider">/</span>
        <div class="section">Organizations</div>
        <span class="divider">/</span>
        <div class="active section">{organization}</div>
      </div>

      <div id="content-container">
        <Users
          users={users}
          followingUsers={followingUsers}
          followUser={handleFollowUser}
          unFollowUser={handleUnFollowUser}
        />
      </div>
    </div>
  );
}

export default App;
