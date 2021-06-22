import React, { useEffect } from 'react';
import { useLazyQuery } from "@apollo/client";

import { ChatMessagesHolder } from "../../elements/chat/wrapper";
import { GET_MESSAGES } from "../../graphql/chat";
import { useUserState } from "../../context/user";

const Messages = () => {
  const [getMessages, { loading, data }] = useLazyQuery(GET_MESSAGES);
  const { users, selectedUser } = useUserState();

  useEffect(() => {
    getMessages({ variables: { from: selectedUser }})
  }, [selectedUser]);

  const getContent = () => {
    if (loading)
      return <div>Loading...</div>;

    if (!data.getMessages.length) {
      const user = users.find(user => user.id === selectedUser);
      const userLabel = user.nickname ?? user.id;
      return <div>Start your conversation with {userLabel}</div>;
    }

    if (data.getMessages.length)
      return <div>Messages</div>
  };

  return (
    <ChatMessagesHolder>
      { getContent() }
    </ChatMessagesHolder>
  );
};

export default Messages;
