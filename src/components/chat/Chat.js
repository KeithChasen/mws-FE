import React, { useContext, useEffect } from 'react';
import { ChatWrapper, ChatItemWrapper } from "../../elements/chat/wrapper";
import Messages from "./Messages";
import ChatUsersList from "./ChatUserList";
import { useSubscription } from "@apollo/client";
import { useUserDispatch } from "../../context/user";
import { AuthContext } from "../../context/auth";
import { NEW_MESSAGE } from "../../graphql/chat";

const Chat = () => {
  const dispatch = useUserDispatch();
  const { user } = useContext(AuthContext);
  const { data, error } = useSubscription(NEW_MESSAGE);

  useEffect(() => {
    if (error) {
      console.log(error, 'subscription error')
    }

    if (data) {
      const companion = user.id === data.newMessage.to ? data.newMessage.from : data.newMessage.to;
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          userId: companion,
          message: data.newMessage
        }
      })
    }
  }, [data, error]);

  return (
    <>
      <ChatWrapper>
        <ChatItemWrapper width={30}>
          <ChatUsersList />
        </ChatItemWrapper>
        <ChatItemWrapper width={60}>
          <Messages />
        </ChatItemWrapper>
      </ChatWrapper>
    </>
  );
};

export default Chat;
