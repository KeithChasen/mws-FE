import styled, { css } from "styled-components";

const StyledProfileWrapper = styled.div`
  background: linear-gradient(
      to bottom left,
      var(--app-black),
      var(--app-grey)
    );
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const StyledCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    height: 90vh;
    width: 90%;
    border: 2px var(--app-white) solid;
    border-radius: 50px;
    box-shadow: 5px 5px 10px var(--app-grey);
    
    @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         border: none;
         box-shadow: none;
       }
`;

const StyledPanel = styled.div`
  width: ${props => props.size || 10}%;
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-white)`};
  padding: 3vw;
  margin: 2vw;
  border-radius: 2vw;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         width: ${(props) => props.fullSize ? `${props.mobileWidth}vw` : `90vw` };
         display: ${(props) => props.fullSize ? `block` : `none` };
         margin-left: auto;
         margin-right: auto;
       }
`;

const CardItem = styled.div`
  width: 90%;
  min-height: 30px;
  border: 1px solid ${props => `var(--app-${props.borderColor})`};
  padding: 5px;
  margin: auto auto 1px ;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.avatar ? 'column' : 'row'};
  box-shadow: 5px 5px 10px ${props => `var(--app-${props.borderColor})`};
  color: var(--app-black);
  font-weight: bold;
  
  .edit-buttons {
    display: inherit;
    flex-direction: row;
    
    @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         display: inherit;
         flex-direction: column;
       }
  }
  
  ${props => props.avatar && css`
      background: var(--app-grey);
      width: 90%;
      margin-bottom: 1rem;
    `};
  
  .label, .card-value {
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1.5rem;
    
    @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
           font-size: 2.5rem;
       }
  }
  
  div.label {
    font-weight: normal;
    border-radius: 5px;
    width: 30%;
    padding: 1rem;
    box-shadow: 2px 2px 2px 2px var(--app-grey);
  }
  
  div.card-value {
    width: 70%;
  }
  
  img {
    width: 10rem;
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    border: 5px solid var(--app-white);
    box-shadow: 3px 3px 3px var(--app-white);
    
    @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         width: 25rem;
         height: 25rem;
       }
  }
`;

const MenuButton = styled.button`
  width: 100%;
  border: 1px solid var(--app-white);
  border-radius: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px var(--app-white);
  color: var(--app-black);
  background: var(--app-grey);
  font-weight: bold;
  font-size: 1rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  
  ${props => props.upload && css`
        width: 45%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        height: 2.5rem;
        border-width: 2px;  
        
       @media only screen 
         and (min-device-width: 280px)
         and (max-device-width: 1024px) {
           width: 80%;
           height: 3.7vh;
           font-size: 1.7vh;
         }
    `};
  
  svg {
    float: left;
    margin-left: 1rem;
  }
`;

export { StyledProfileWrapper, StyledCardWrapper, StyledPanel, CardItem, MenuButton };
