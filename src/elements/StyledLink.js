import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: var(--app-black);
  ${({ nav }) => nav && css`color: var(--app-white); margin: 10px;`};
  text-decoration: none;
  
  &:hover {
    background: -webkit-linear-gradient(var(--app-white), var(--app-black));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  font-size: 1rem;
  
  @media only screen 
   and (min-device-width: 280px)
   and (max-device-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export default StyledLink;
