import React, { useEffect } from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_USERS } from '../../graphql/users'

import { UserListWrapper, UserList, UserLink } from "../../elements/users/list";
import { useUserDispatch, useUserState } from "../../context/user";
import { filterUsersWithoutAccount } from "../../utils/helpers";

const UsersList = () => {
  const dispatch = useUserDispatch();
  const { users } = useUserState();

  //todo: put to custom hook along with one from friends page
  const [getUsers, { data }] = useLazyQuery(GET_USERS, {
    fetchPolicy: 'no-cache'
  });

  useEffect(() => {
    if (typeof users === 'undefined') {
      getUsers()
    }
  },[users, getUsers]);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_USERS', payload: data.getUsers })
    }
  }, [data, dispatch]);

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
