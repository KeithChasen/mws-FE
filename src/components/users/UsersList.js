import React from 'react';
import { GET_USERS } from '../../graphql/users'
import { UserListWrapper, UserList, UserLink } from "../../elements/users/list";
import { useUserDispatch, useUserState } from "../../context/user";
import { filterUsersWithoutAccount } from "../../utils/helpers";
import { useQueryOnDemand } from "../../utils/hooks/useQueryOnDemand";

const UsersList = () => {
  const dispatch = useUserDispatch();
  const { users } = useUserState();
  useQueryOnDemand(GET_USERS, users, dispatch, 'SET_USERS')

  const getContent = () => {
    if (!users || !users.length)
      return (<div>No users...</div>);

    else
      return filterUsersWithoutAccount(users).map(user => (
        <UserLink key={user.id} to={ `/user/${user.id}` }>
          { `${user.firstname} ${user.lastname}` || user.nickname }
        </UserLink>
      ));
  };

  return (
    <UserListWrapper>
      <UserList>
      { getContent() }
      </UserList>
    </UserListWrapper>
  );
};

export default UsersList;
