import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_USERS } from '../../graphql/users'

const UsersList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  const usersList = data?.getUsers && data.getUsers.map(user => (<li key={user.id}>{ user.nickname ?? user.id  }</li>));

  const content = loading ?
    (<div>Loading...</div>) :
      error ? (<div>Error: Wasn't able to fetch users list</div>) :
        (<div>
          <ul>{ usersList.map(user => user) }</ul>
        </div>);

  return (
    <div>
      <h4>Users list</h4>
      { content }
    </div>
  );
};

export default UsersList;
