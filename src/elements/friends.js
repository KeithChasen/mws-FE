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
  ${friendsPanelStyles}
`;

const FriendsPanel = styled.div`
  height: 70vh;
  ${friendsPanelStyles}
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
`;

export { FriendsWrapper, RequestsPanel, FriendsPanel, AddToFriendsButton };
