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
  width: ${props => props.width || 0}%;
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
  height: 90vh;
  background: linear-gradient(
      to right,
      var(--app-white),
      var(--app-grey)
      );
  border: 2px solid var(--app-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatMessagesSpace = styled.div`
  position: relative;
  height: 90vh;
  
  overflow-y: scroll;
  width: 100%;
    
   &::-webkit-scrollbar {
      display: none;
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
  width: 20%;
  margin-left: 0.1rem;
  background: var(--app-royalBlue);
  color: var(--app-white);
  ${inputStyles}
`;

const LoadMoreButton = styled.button`
  margin: 0 auto;
  display: block;
  border: none;
  background: var(--app-grey);
  height: 2rem;
  width: 10rem;
  &:hover {
    cursor: pointer;
  }
`;

const Message = styled.div`
  margin: 0.5rem;
  padding: 0.7rem;
  float: ${ props => props.received ? 'left' : 'right' };
  font-size: 1.5rem;
  width: 75%;
  background: ${ props => props.received ? `var(--app-blue)` : `var(--app-charcoalBlue)` };
  color: var(--app-grey);
  border: 0.3rem solid var(--app-grey);
  border-radius: .7rem;
  visibility: ${ props => props.pseudo ? `hidden` : `visible` };
`;

const SendForm = styled.div`
  width: 90%;
  height: 10vh;
  background: transparent;
  border-top: 0.5rem solid var(--app-grey);
  display: inherit;
  flex-direction: row;
  justify-content: inherit;
  align-items: inherit;
  
  input, button {
    height: 50%;
  }
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
      Message,
      LoadMoreButton,
      SendForm
};
