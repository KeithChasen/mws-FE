import styled from "styled-components";
import { friendsPanelStyles } from "./styledHelpers";

const FriendsWrapper = styled.div`
    background: var(--app-grey);
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
`;

const RequestsPanel = styled.div`
  height: 20vh;
  margin-bottom: 1vh;
  ${ friendsPanelStyles };
`;

const FriendsPanel = styled.div`
  height: 70vh;
  ${ friendsPanelStyles }
`;

const AddToFriendsButton = styled.button`
  background: var(--app-grey);
  border: 3px solid var(--app-white);
  border-radius: 0.3rem;
  display: block;
  height: 2rem;
  margin: 1vh auto;
  width: 10rem;
  color: var(--app-black);
  font-weight: bold;
  
  @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         width: 70vw;
         height: 5vh;
       }
`;

const FriendCard = styled.div`
  border: 0.1rem solid var(--app-grey);
  border-radius: 1rem;
  margin: 1rem;
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  letter-spacing: .1rem;
  font-size: 1.5rem;

  @media
    only screen and (min-device-width: 280px)
    and (max-device-width: 1024px) {
      width: 100%;
    }

  transition-timing-function: ease-in-out;
  transition: background-color 2s, color 2s;
  
  :hover {
    background: var(--app-black);
    color: var(--app-white);
  }
`;

const FriendPhoto = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: calc(50% + 3vw);
  width: calc(10% + 5vw);
  margin: .2rem;

  @media
    only screen and (min-device-width: 280px)
    and (max-device-width: 1024px) {
      width: 30%;
      height: 90%;
    }
`;

const FriendCardElement = styled.div`
  height: 100%;
  width: 50%;
  display: grid;
  place-items: center;
  
  span {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media
  only screen and (min-device-width: 280px)
  and (max-device-width: 1024px) {
    font-size: 3rem;
  }
`

const FriendsButtonsWrapper = styled.div`
  width: 20%;
  height: 100%;
  border: none;
  display: grid;
  place-items: center;
`;

const FriendCardButton = styled.button`
  width: 80%;
  height: 50%;
  border: none;
  border-radius: .3rem;
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-white)`};
  color: var(--app-white);
  font-weight: bold;
  font-size: 0.7rem;

  @media
  only screen and (min-device-width: 280px)
  and (max-device-width: 1024px) {
    font-size: 2rem;
  }
  
  :hover {
    cursor: pointer;
  }
`

export {
  FriendsWrapper,
  RequestsPanel,
  FriendsPanel,
  AddToFriendsButton,
  FriendCard,
  FriendPhoto,
  FriendCardElement,
  FriendsButtonsWrapper,
  FriendCardButton
};
