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

`;

const ChatUserListItem = styled.li`

`;

export { ChatWrapper, ChatItemWrapper, ChatUserListWrapper, ChatUserList, ChatUserListItem };
