import styled from "styled-components";

const Header = styled.header`
  background: var(--app-black);
  padding: 10px;
  color: var(--app-white);
  height: 5vh;
  
  nav {
    height: 100%;
    
    ul {
      height: inherit;
      align-items: center;
      display: flex;
    }
    
    .mobile-header {
       display: none;
     }
  }
  
  @media 
  only screen and (min-device-width: 320px)
   and (max-device-width: 812px) {
     .desktop-header {
      display: none;
     }
     nav .mobile-header {
       display: flex;
     }
  }
`;

export default Header;
