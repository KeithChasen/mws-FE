import React, { useEffect } from 'react';
import { useLazyQuery } from "@apollo/client";

import { ChatMessagesHolder, ChatMessagesSpace, ChatInput, ChatButton } from "../../elements/chat/wrapper";
import { GET_MESSAGES } from "../../graphql/chat";
import { useUserState } from "../../context/user";

const Messages = () => {
  const [getMessages, { loading, data }] = useLazyQuery(GET_MESSAGES);
  const { users, selectedUser } = useUserState();

  useEffect(() => {
    getMessages({ variables: { from: selectedUser }})
  }, [selectedUser]);

  const sendMessage = e => {
    e.preventDefault();
  };

  const getChatMarkup = message => (
    <>
      <ChatMessagesSpace>
        { message }
      </ChatMessagesSpace>
      <form onSubmit={sendMessage}>
        <ChatInput/>
        <ChatButton>Send</ChatButton>
      </form>
    </>
  );

  const getContent = () => {
    if (loading)
      return <div>Loading...</div>;

    if(!data) {
      return <div>Select someone to talk to...</div>
    }

    if (!data.getMessages.length) {
      const user = users.find(user => user.id === selectedUser);
      const userLabel = user.nickname ?? user.id;
      return getChatMarkup(`Start your conversation with ${userLabel}`);
    }

    if (data.getMessages.length)
      return getChatMarkup('');
  };

  return (
    <ChatMessagesHolder>
      { getContent() }
    </ChatMessagesHolder>
  );
};

export default Messages;
