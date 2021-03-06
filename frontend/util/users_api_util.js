export const getUsers = () =>
  $.ajax({
    method: 'GET',
    url: 'api/users',
  });

export const getUser = (id) =>
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  });

export const searchUsers = (data) =>
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data,
  });

export const updateUser = (user) =>
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {
      user,
    },
  });
