import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const UserListWrapper = styled.div`
    background: linear-gradient(
      to bottom left,
      ${(props) => props.theme.black},
      ${(props) => props.theme.white} 
    );
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const UserList = styled.ul`
  width: 80vw;
  min-height: 30px;
  background: ${props => props.theme[props.bgcolor] || props.theme.white};
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
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.black};
  font-weight: 700;

  &:hover {
    background: ${props => props.theme.grey};
  }
`;


export { UserListWrapper, UserList, UserLink };
