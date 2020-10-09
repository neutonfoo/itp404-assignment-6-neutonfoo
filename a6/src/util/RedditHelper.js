export function fetchOrganizationUsers(organization) {
  return fetch(`https://api.github.com/orgs/${organization}/members`, {
    headers: {
      Accept: "application/json",
    },
  }).then(response => {
    return response.json();
  });
}

export function fetchUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: "application/json",
    },
  }).then(response => {
    return response.json();
  });
}

export function fetchUserRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: "application/json",
    },
  }).then(response => {
    return response.json();
  });
}
