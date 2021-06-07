import styled from "styled-components";

const Header = styled.header`
  background: ${(props) => props.theme.black};
  padding: 10px;
  color: ${(props) => props.theme.white};
`;

export default Header;
