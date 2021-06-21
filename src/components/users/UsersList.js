import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_USERS } from '../../graphql/users'

import { UserListWrapper, UserList, UserLink } from "../../elements/users/list";

const UsersList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  const usersList = data?.getUsers &&
    data.getUsers.map(
      user => (
        <UserLink key={user.id} to={`/user/${user.id}`}>
          { user.nickname ?? user.id  }
        </UserLink>
      )
    );

  const content = loading ?
    (<div>Loading...</div>) :
      error ? (<div>Error: Wasn't able to fetch users list</div>) :
        (
          <UserList>
            { usersList.map(user => user) }
          </UserList>
        );

  return (
    <UserListWrapper>
      { content }
    </UserListWrapper>
  );
};

export default UsersList;
