import React, { useState } from "react";

import { fetchUserInfo, fetchUserRepos } from "./util/RedditHelper";

export default function User({ user, isFollowing, followUser, unFollowUser }) {
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  function showUserInfoModal() {
    fetchUserInfo(user.login).then(response => setUserInfo(response));
    window.jQuery(`#modal-user-info-${user.id}`).modal("show");
  }

  function showUserReposModal() {
    fetchUserRepos(user.login).then(response => setUserRepos(response));
    window.jQuery(`#modal-user-repos-${user.id}`).modal("show");
  }

  return (
    <>
      {/* User Card */}
      <div className="ui card raised">
        <a
          className="ui image cursor-pointer"
          onClick={() => showUserInfoModal()}
        >
          <img src={user.avatar_url} alt={`${user.login}`} />
        </a>
        <div className="content">
          <a
            className="center aligned header cursor-pointer"
            onClick={() => showUserInfoModal()}
          >
            {user.login}
          </a>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui button blue"
              onClick={() => showUserReposModal()}
            >
              Repos
            </div>
            {isFollowing && (
              <button
                className="ui inverted red attached button"
                onClick={() => unFollowUser(user.id)}
              >
                Unfollow
              </button>
            )}
            {!isFollowing && (
              <button
                className="ui inverted green attached button"
                onClick={() => followUser(user.id)}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
      {/* User Info Modal */}
      <div id={`modal-user-info-${user.id}`} className="ui modal">
        <div className="header">{user.login}</div>
        <div className="image content">
          <div className="ui medium image">
            <img src={user.avatar_url} alt={`${user.login}`} />
          </div>
          <div className="description">
            <div className="ui header">{}</div>
            <table className="ui definition table">
              <tbody>
                <tr>
                  <td>GitHub ID</td>
                  <td>{userInfo.id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{userInfo.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{userInfo.email}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>{userInfo.company}</td>
                </tr>
                <tr>
                  <td>Public Repos</td>
                  <td>{userInfo.public_repos}</td>
                </tr>
                <tr>
                  <td>Public Gists</td>
                  <td>{userInfo.public_gists}</td>
                </tr>
              </tbody>
            </table>
            <p>{userInfo.bio}</p>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Close</div>
        </div>
      </div>
      {/* User Repos Modal */}
      <div id={`modal-user-repos-${user.id}`} className="ui modal">
        <div className="header">{user.login} Repositories</div>
        <div className="scrolling content">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Repository</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {userRepos.map(userRepo => (
                <tr>
                  <td data-label="Repository">
                    <a
                      href={userRepo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {userRepo.name}
                    </a>
                  </td>
                  <td data-label="Description">{userRepo.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="actions">
          <div className="ui black deny button">Close</div>
        </div>
      </div>
    </>
  );
}
