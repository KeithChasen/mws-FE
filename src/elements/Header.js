import styled from "styled-components";

const Header = styled.header`
  background: var(--app-black);
  color: var(--app-white);
  height: 5vh;
  padding: 10px;
  
  nav {
    height: 100%;
    
    ul {
      align-items: center;
      display: flex;
      height: inherit;
    }
    
    .mobile-header {
       display: none;
     }
  }
  
  @media 
  only screen and (min-device-width: 280px)
   and (max-device-width: 1024px) {
     .desktop-header {
       display: none;
     }
     nav .mobile-header {
       display: flex;
     }
  }
`;

export default Header;
