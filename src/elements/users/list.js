import styled from "styled-components";
import { NavLink } from "react-router-dom";

const UserListWrapper = styled.div`
    background: linear-gradient(
      to bottom left,
      var(--app-black),
      var(--app-white)
    );
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const UserList = styled.ul`
  width: 80vw;
  min-height: 30px;
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-white)`};
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserLink = styled(NavLink)`
  min-height: 30px;
  margin-bottom: 1vh;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  color: var(--app-black);
  border: 1px solid var(--app-black);
  font-weight: 700;

  &:hover {
    background: var(--app-grey);
  }
`;


export { UserListWrapper, UserList, UserLink };
