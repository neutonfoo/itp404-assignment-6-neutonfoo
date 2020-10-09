import React from "react";

import User from "./User";

export default function Users({
  users,
  followingUsers,
  followUser,
  unFollowUser,
}) {
  return (
    <div className="ui three cards">
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          isFollowing={followingUsers.some(({ id }) => id === user.id)}
          followUser={followUser}
          unFollowUser={unFollowUser}
        />
      ))}
    </div>
  );
}
