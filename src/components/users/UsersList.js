import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_USERS } from '../../graphql/users'

import { UserListWrapper, UserList, UserLink } from "../../elements/users/list";
import { useUserDispatch, useUserState } from "../../context/user";
import { filterUsersWithoutAccount } from "../../utils/helpers";

const UsersList = () => {
  const dispatch = useUserDispatch();
  const { users } = useUserState();
  const [error, setError] = useState(null);

  //todo: make it using lazy query and put to custom hook along with one from friends page
  const { loading } = useQuery(GET_USERS, {
    onCompleted: data => dispatch({ type: 'SET_USERS', payload: data.getUsers }),
    onError: error => {
      console.log(error);
      setError('Error occured')
    }
  });

  const getContent = () => {
    if (loading)
      return (<div>Loading...</div>);

    if (error)
      return (<div>{error}</div>);

    if(!users || !users.length)
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
