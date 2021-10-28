import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { backgroundLinearGradient } from "../styledHelpers";

const UserListWrapper = styled.div`
    ${backgroundLinearGradient('to bottom left', 'black', 'white')};
    display: flex;
    height: 100vh;
    justify-content: center;
`;

const UserList = styled.ul`
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-white)`};
  border-radius: 5px;
  margin: 10px;
  min-height: 30px;
  overflow: scroll;
  padding: 20px;
  width: 80vw;
    
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserLink = styled(NavLink)`
  align-items: center;
  border: 1px solid var(--app-black);
  border-radius: 5px;
  color: var(--app-black);
  display: flex;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 1vh;
  min-height: 30px;
  text-decoration: none;

  &:hover {
    background: var(--app-grey);
  }
`;


export { UserListWrapper, UserList, UserLink };
