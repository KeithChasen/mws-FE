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
  ${ friendsPanelStyles }
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

const FriendRequestCard = styled.div`
  border: 0.1rem solid var(--app-grey);
  margin: 1rem;
  width: 25%;
`;

const FriendCard = styled.div`

`;

export { FriendsWrapper, RequestsPanel, FriendsPanel, AddToFriendsButton, FriendCard, FriendRequestCard };
