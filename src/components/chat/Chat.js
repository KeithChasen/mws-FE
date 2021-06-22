import React from 'react';
import { ChatWrapper, ChatItemWrapper } from "../../elements/chat/wrapper";
import Messages from "./Messages";
import ChatUsersList from "./ChatUserList";

const Chat = () => {
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
