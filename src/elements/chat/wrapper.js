import styled from "styled-components";

const ChatWrapper = styled.div`
    background: linear-gradient(
      to bottom left,
      ${(props) => props.theme.black},
      ${(props) => props.theme.white} 
    );
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const ChatItemWrapper = styled.div`
  width: ${props => props.width || 30}%;
`;

const ChatUserListWrapper = styled.div`

`;

const ChatUserList = styled.ul`
  margin-top: 1vh;
  list-style: none;
`;

const ChatUserListItem = styled.li`
  border: 2px solid ${props => `${props.selected ? props.theme.white : props.theme.grey}`};
  border-radius: 2vw;
  padding: 0.8vw;
  margin-bottom: 1vh;
  background: ${props => `${props.selected ? props.theme.grey : props.theme.white}`};
`;

const ChatMessagesHolder = styled.div`

`;

export { ChatWrapper, ChatItemWrapper, ChatUserListWrapper, ChatUserList, ChatUserListItem, ChatMessagesHolder };
