import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from "@apollo/client";

import { ChatMessagesHolder, ChatMessagesSpace, ChatInput, ChatButton } from "../../elements/chat/wrapper";
import { GET_MESSAGES, SEND_MESSAGE } from "../../graphql/chat";
import { useUserState } from "../../context/user";

const Messages = () => {
  const [getMessages, { loading, data }] = useLazyQuery(GET_MESSAGES);
  const { users, selectedUser } = useUserState();
  const [content, setContent] = useState('');
  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    getMessages({ variables: { from: selectedUser }})
  }, [selectedUser]);

  const submitForm = e => {
    e.preventDefault();
    if (content.trim() === '') {
      return;
    }

    sendMessage({ variables: { to: selectedUser, content }})
      .then(res => console.log(res, 'send message res'))
      .catch(err => console.log(err.graphQLErrors, 'send message error'))
  };

  const getChatMarkup = message => (
    <>
      <ChatMessagesSpace>
        { message }
      </ChatMessagesSpace>
      <form onSubmit={submitForm}>
        <ChatInput onChange={e => setContent(e.target.value)}/>
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
