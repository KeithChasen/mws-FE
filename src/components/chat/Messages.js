import React, { useEffect, useState, useRef } from 'react';
import { useLazyQuery, useMutation } from "@apollo/client";

import { ChatMessagesHolder, ChatMessagesSpace, ChatInput, ChatButton, Message } from "../../elements/chat/wrapper";
import { GET_MESSAGES, SEND_MESSAGE } from "../../graphql/chat";
import { useUserDispatch, useUserState } from "../../context/user";

const Messages = () => {
  const messagesRef = useRef(null);
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
      dispatch({
        type: 'SET_MESSAGES',
        payload: {
          userId: selectedUser,
          messages: data.getMessages
        }
      })
    }
  }, [data]);

  const submitForm = e => {
    e.preventDefault();
    if (content.trim() === '') {
      return;
    }

    setContent('');

    sendMessage({ variables: { to: selectedUser, content }})
      .then(() => {})
      .catch(err => console.log(err.graphQLErrors, 'send message error'))
  };

  const messagesContent = selectedUser && messages?.[selectedUser] && (
      messages[selectedUser]
          .map(message =>
            <Message key={message.id} received={message.from === selectedUser}>
              {message.content}
            </Message>
          )
  );

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scroll({
        top: messagesRef.current.getBoundingClientRect().bottom + window.screenY
      })
    }
  }, [messages, selectedUser]);

  const getChatMarkup = text => (
    <>
      <ChatMessagesSpace>
        { text }
        <ul ref={messagesRef}>
          { messagesContent }
          <div  />
        </ul>
      </ChatMessagesSpace>
      <form onSubmit={submitForm}>
        <ChatInput onChange={e => setContent(e.target.value)} value={content}/>
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
