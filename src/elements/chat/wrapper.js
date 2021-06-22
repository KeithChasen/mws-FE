import styled, {css} from "styled-components";

const ChatWrapper = styled.div`
    background: linear-gradient(
      to bottom left,
      ${(props) => props.theme.black},
      ${(props) => props.theme.white} 
    );
    display: flex;
    justify-content: center;
    min-height: 100vh;
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
  border-top: 2px solid ${props => `${props.selected ? props.theme.white : props.theme.grey}`};
  border-left: 2px solid ${props => `${props.selected ? props.theme.white : props.theme.grey}`};
  border-bottom: 2px solid ${props => `${props.selected ? props.theme.white : props.theme.grey}`};
  border-top-left-radius: ${props => props.selected ? `1vw` : 'none'} ;
  padding: 0.8vw;
  margin-bottom: 1vh;
  background: ${props => `${props.selected ? props.theme.grey : props.theme.white}`};
  box-shadow: ${props => props.selected ? `5px 5px 10px ${props.theme.grey}` : 'none'};
`;

const ChatMessagesHolder = styled.div`
  margin-top: 1vh;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.grey};
`;

const ChatMessagesSpace = styled.div`
  height: 80vh;
`;

const inputStyles = css`
  border: 0.2rem solid ${props => props.theme.grey};
  display: inline-block;
  border-radius: 0.5rem;
  font-size: 1.7rem;
  &:focus {
     outline-color: ${(props) => props.theme.grey};
   }
`;

const ChatInput = styled.input`
  width: 80%;
  margin-left: 5%;
  ${inputStyles}
`;

const ChatButton = styled.button`
  width: 10%;
  margin-left: 0.1rem;
  ${inputStyles}
`;

export {
      ChatWrapper,
      ChatItemWrapper,
      ChatUserListWrapper,
      ChatUserList,
      ChatUserListItem,
      ChatMessagesHolder,
      ChatMessagesSpace,
      ChatInput,
      ChatButton
};
