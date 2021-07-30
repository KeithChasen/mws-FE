import React, {useEffect, useState, useRef, useContext} from 'react';
import { useLazyQuery, useMutation, useSubscription } from "@apollo/client";

import {
  ChatMessagesHolder,
  ChatMessagesSpace,
  ChatInput,
  ChatButton,
  Message,
  LoadMoreButton
} from "../../elements/chat/wrapper";

import { GET_MESSAGES, NEW_MESSAGE, SEND_MESSAGE } from "../../graphql/chat";
import { useUserDispatch, useUserState } from "../../context/user";
import { AuthContext } from "../../context/auth";

const Messages = () => {
  const NUMBER_OF_MINIMUM_MESSAGES = 5;
  const { user } = useContext(AuthContext);
  const messagesRef = useRef(null);
  const [getMessages, { loading, data }] = useLazyQuery(GET_MESSAGES);
  const { data: newMessageData, error } = useSubscription(NEW_MESSAGE);
  const dispatch = useUserDispatch();
  const { users, selectedUser, chat } = useUserState();
  const [content, setContent] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    if (error) {
      console.log(error, 'subscription error')
    }

    if (newMessageData) {
      const companion =
        user.id === newMessageData.newMessage.to ?
          newMessageData.newMessage.from :
          newMessageData.newMessage.to;
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          userId: companion,
          message: newMessageData.newMessage
        }
      });
    }
  }, [newMessageData, error]);

  useEffect(() => {
    if (messagesRef.current && chat?.[selectedUser]?.messages) {
      messagesRef.current.scroll({
        top: messagesRef.current.getBoundingClientRect().bottom + (window.screenY * chat[selectedUser].messages.length)
      })
    }
  }, [selectedUser]);

  useEffect(() => {
    setShowLoadMore(true);
  },[selectedUser]);

  useEffect(() => {
    if (!chat || (selectedUser && !chat[selectedUser]?.messages)) {
      const step = chat?.[selectedUser] ? chat[selectedUser].step ?? 0 : 0;
      getMessages({ variables: { from: selectedUser, step }})
    }
  }, [selectedUser]);

  useEffect(() => {
    if (data) {
      if (data.getMessages.length < NUMBER_OF_MINIMUM_MESSAGES) {
        setShowLoadMore(false);
      }

      dispatch({
        type: 'SET_MESSAGES',
        payload: {
          userId: selectedUser,
          messages: data.getMessages,
          step: chat?.[selectedUser] ? chat[selectedUser].step + 1 ?? 1 : 1
        }
      });
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

  const messagesContent = selectedUser && chat?.[selectedUser]?.messages && (
    chat?.[selectedUser]?.messages
          .map(message =>
            <Message key={message.id} received={message.from === selectedUser}>
              {message.content}
            </Message>
          )
  );

  const loadMessages = e => {
    e.preventDefault();
    const step = chat?.[selectedUser] ? chat[selectedUser].step ?? 0 : 0;
    getMessages({ variables: { from: selectedUser, step }})
  };

  const getChatMarkup = text => (
    <>
      <ChatMessagesSpace>
        { text }
        <ul ref={messagesRef}>
          { showLoadMore && <LoadMoreButton onClick={loadMessages}>{ loading ? 'Loading...' : 'Load More...' }</LoadMoreButton> }
          { messagesContent }
        </ul>
      </ChatMessagesSpace>
      <form onSubmit={submitForm}>
        <ChatInput onChange={e => setContent(e.target.value)} value={content}/>
        <ChatButton>Send</ChatButton>
      </form>
    </>
  );

  const getContent = () => {
    if(!data && !loading) {
      return <div>Select someone to talk to...</div>
    }

    if (!chat?.[selectedUser]?.messages.length) {
      const user = users?.find(user => user.id === selectedUser);
      const userLabel = user?.nickname ?? user?.id;
      return getChatMarkup(`Start your conversation with ${userLabel}`);
    }

    if (data?.getMessages.length || chat)
      return getChatMarkup('');
  };

  return (
    <ChatMessagesHolder>
      { getContent() }
    </ChatMessagesHolder>
  );
};

export default Messages;
