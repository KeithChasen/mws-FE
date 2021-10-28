import styled from "styled-components";
import { backgroundLinearGradient, inputStyles } from "../styledHelpers";

const ChatWrapper = styled.div`
    ${backgroundLinearGradient('to bottom left', 'black', 'white')};
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;

const ChatItemWrapper = styled.div`
  width: ${props => props.width || 0}%;
`;

const ChatUserList = styled.ul`
  list-style: none;
  margin-top: 1vh;
`;

const ChatUserListItem = styled.li`
  ${
      props => props.selected ? 
        backgroundLinearGradient('to right', 'grey', 'white') : 
        backgroundLinearGradient('to right', 'grey', 'black')
  };
  border: 2px solid ${props => `${props.selected ? `var(--app-white)`  : `var(--app-grey)`}`};
  border-radius: ${props => props.selected ? `2vw 0 0 2vw` : '1vw 0 0 1vw'} ;
  box-shadow: ${props => props.selected ? `5px 5px 10px var(--app-grey)` : 'none'};
  margin-bottom: 1vh;
  padding: 0.8vw;
`;

const ChatMessagesHolder = styled.div`
  align-items: center;
  ${backgroundLinearGradient('to right', 'white', 'grey')};
  border: 2px solid var(--app-white);
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  margin-top: 1vh;
  width: 100%;
`;

const ChatMessagesSpace = styled.div`
  height: 90vh;
  overflow-y: scroll;
  position: relative;
  width: 100%;
    
   &::-webkit-scrollbar {
      display: none;
   }
`;



const ChatInput = styled.input`
  width: 80%;
  margin-left: 5%;
  ${inputStyles}
`;

const ChatButton = styled.button`
  background: var(--app-royalBlue);
  color: var(--app-white);
  margin-left: 0.1rem;
  width: 20%;
  ${inputStyles}
`;

const LoadMoreButton = styled.button`
  background: var(--app-grey);
  border: none;
  display: block;
  height: 2rem;
  margin: 0 auto;
  width: 10rem;
  
  &:hover {
    cursor: pointer;
  }
  
  @media 
  only screen and (min-device-width: 280px)
   and (max-device-width: 1024px) {
     height: 4vh;
     margin-bottom: 2vh;
     width: 100%;
   }
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

const Message = styled.div`
  background: ${ props => props.received ? `var(--app-blue)` : `var(--app-charcoalBlue)` };
  border: 0.3rem solid var(--app-grey);
  border-radius: .7rem;
  color: var(--app-grey);
  float: ${ props => props.received ? 'left' : 'right' };
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.7rem;
  visibility: ${ props => props.pseudo ? `hidden` : `visible` };
  width: 75%;
`;

export {
      ChatWrapper,
      ChatItemWrapper,
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
