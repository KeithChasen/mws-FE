import React, { useState } from 'react';

import { ChatUserListWrapper, ChatUserList, ChatUserListItem } from "../../elements/chat/wrapper";
import { useUserDispatch, useUserState } from "../../context/user";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users";

const ChatUsersList = () => {
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
        <ChatUserListItem key={user.id}>
          { user.nickname ?? user.id  }
        </ChatUserListItem>
      ));
  };

  return (
    <ChatUserListWrapper>
      <ChatUserList>
        { getContent() }
      </ChatUserList>
    </ChatUserListWrapper>
  );
};

export default ChatUsersList;