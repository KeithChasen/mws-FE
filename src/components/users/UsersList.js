import React, {useState} from 'react';
import { useQuery } from "@apollo/client";
import { GET_USERS } from '../../graphql/users'

import { UserListWrapper, UserList, UserLink } from "../../elements/users/list";
import {useUserDispatch, useUserState} from "../../context/user";

const UsersList = () => {
  const dispatch = useUserDispatch();
  const { users } = useUserState();
  const [error, setError] = useState(null);

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
      return users.map(user => (
        <UserLink key={user.id} to={ `/user/${user.id}` }>
          { user.nickname ?? user.id  }
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
