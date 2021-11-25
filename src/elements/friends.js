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

export { FriendsWrapper, RequestsPanel, FriendsPanel };
