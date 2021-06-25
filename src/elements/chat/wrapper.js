import styled, {css} from "styled-components";

const ChatWrapper = styled.div`
    background: linear-gradient(
      to bottom left,
      var(--app-black),
      var(--app-white) 
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
  border: 2px solid ${props => `${props.selected ? `var(--app-white)`  : `var(--app-grey)`}`};
  border-radius: ${props => props.selected ? `2vw 0 0 2vw` : '1vw 0 0 1vw'} ;
  padding: 0.8vw;
  margin-bottom: 1vh;
  background: ${props => props.selected ? `linear-gradient(
      to right,
      var(--app-grey),
      var(--app-white)
    )` : `linear-gradient(
      to right,
      var(--app-grey),
      var(--app-black)
    )`};
  box-shadow: ${props => props.selected ? `5px 5px 10px var(--app-grey)` : 'none'};
`;

const ChatMessagesHolder = styled.div`
  margin-top: 1vh;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      to right,
      var(--app-white),
      var(--app-grey)
      );
  border: 2px solid var(--app-white);
`;

const ChatMessagesSpace = styled.div`
  position: relative;
  height: 80vh;
  
  ul {
    height: 100%;
    overflow-y: auto;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const inputStyles = css`
  border: 0.2rem solid var(--app-grey);
  display: inline-block;
  border-radius: 0.5rem;
  font-size: 1.7rem;
  &:focus {
     outline-color: var(--app-grey);
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

const Message = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  float: ${ props => props.received ? 'left' : 'right' };
  font-size: 1.5rem;
  width: 50%;
  background: ${ props => props.received ? `var(--app-blue)` : `var(--app-green)` };
  color: var(--app-grey);
  border: 0.5rem solid var(--app-grey);
  border-radius: 1.7rem;
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
      ChatButton,
      Message
};
