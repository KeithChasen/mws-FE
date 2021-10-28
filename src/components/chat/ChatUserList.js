import React, { useState } from 'react';

import { ChatUserList, ChatUserListItem } from "../../elements/chat/wrapper";
import { useUserDispatch, useUserState } from "../../context/user";
import { useQuery } from "@apollo/client";
import { GET_CHAT_USERS } from "../../graphql/users";
import { filterUsersWithoutAccount } from "../../utils/helpers";

const ChatUsersList = () => {
  const dispatch = useUserDispatch();
  const { users, selectedUser } = useUserState();
  const [error, setError] = useState(null);

  const { loading } = useQuery(GET_CHAT_USERS, {
    onCompleted: data => {
      dispatch({ type: 'SET_USERS', payload: data.getChatUsers })
    } ,
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
      return filterUsersWithoutAccount(users)
        .map(user => (
          <ChatUserListItem
            selected={selectedUser === user.id}
            key={user.id}
            onClick={() => dispatch({
              type: 'SET_SELECTED_USER',
              payload: user.id
            })}
          >
            { `${user.firstname} ${user.lastname}` || user.nickname }
            { user.recentMessage ? ` - ${user.recentMessage.content}` : '' }
          </ChatUserListItem>
        ));
  };

  return (
    <>
      <ChatUserList>
        { getContent() }
      </ChatUserList>
    </>
  );
};

export default ChatUsersList;