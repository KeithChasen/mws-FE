import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  margin: 10px;
  color: ${props => props.theme.white};
  text-decoration: none;
`;

export default StyledLink;
