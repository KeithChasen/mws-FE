import React, { useState } from 'react';
import { ChatWrapper, ChatItemWrapper } from "../../elements/chat/wrapper";
import Messages from "./Messages";
import ChatUsersList from "./ChatUserList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  const [showUsersList, toggleUsersList] = useState(true);
  return (
    <>
      <ChatWrapper>
        <ChatItemWrapper width={showUsersList ? 30 : 0}>
          <ChatUsersList />
        </ChatItemWrapper>
        <ChatItemWrapper width={showUsersList ? 60 : 100}>
          <button
            onClick={() => toggleUsersList(!showUsersList)}
            style={{
              position: 'absolute',
              top: "50%",
              background: "transparent",
              border: 'none',
              zIndex: 1
            }}
          >
            <FontAwesomeIcon icon={showUsersList ? faChevronLeft : faChevronRight}/>
          </button>
          <Messages />
        </ChatItemWrapper>
      </ChatWrapper>
    </>
  );
};

export default Chat;
