import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from "@apollo/client";

import { ChatMessagesHolder, ChatMessagesSpace, ChatInput, ChatButton } from "../../elements/chat/wrapper";
import { GET_MESSAGES, SEND_MESSAGE } from "../../graphql/chat";
import { useUserDispatch, useUserState } from "../../context/user";

const Messages = () => {
  const [getMessages, { loading, data }] = useLazyQuery(GET_MESSAGES);
  const dispatch = useUserDispatch();
  const { users, selectedUser, messages } = useUserState();
  const [content, setContent] = useState('');
  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    if (!messages || (selectedUser && !messages[selectedUser])) {
      getMessages({ variables: { from: selectedUser }})
    }
  }, [selectedUser]);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_MESSAGES', payload: { userId: selectedUser, messages: data.getMessages }})
    }
  }, [data]);

  const submitForm = e => {
    e.preventDefault();
    if (content.trim() === '') {
      return;
    }

    sendMessage({ variables: { to: selectedUser, content }})
      .then(() => {})
      .catch(err => console.log(err.graphQLErrors, 'send message error'))
  };

  const messagesContent = selectedUser && messages?.[selectedUser] && (
    <ul>
      {
        messages[selectedUser]
          .map(message =>
            <li key={message.id}>
              {message.content}
            </li>
          )
      }
    </ul>
  );

  const getChatMarkup = text => (
    <>
      <ChatMessagesSpace>
        { text }
      </ChatMessagesSpace>
      <form onSubmit={submitForm}>
        { messagesContent }
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
