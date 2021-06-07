import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  margin: 10px;
  color: ${props => props.theme.black};
  ${({ nav }) => nav && css`color: ${props => props.theme.white}`};
  text-decoration: none;
  
  &:hover {
    background: -webkit-linear-gradient(${props => props.theme.white}, ${props => props.theme.black});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default StyledLink;
