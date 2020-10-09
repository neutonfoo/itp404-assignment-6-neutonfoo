export function fetchFollowingUsers() {
  return fetch(`/api/users`, {
    headers: {
      Accept: "application/json",
    },
  }).then(response => {
    return response.json();
  });
}

export function followUser(userId) {
  return fetch(`/api/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: userId }),
  }).then(response => {
    return response.json();
  });
}

export function unFollowUser(userId) {
  return fetch(`/api/users/${userId}`, {
    method: "DELETE",
  }).then(response => {
    return response.json();
  });
}
