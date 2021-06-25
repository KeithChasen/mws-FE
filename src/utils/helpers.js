export const filterUsersWithoutAccount = users =>
  users.filter(user => ((user.firstname && user.lastname) || user.nickname));
