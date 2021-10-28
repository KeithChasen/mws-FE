import styled, { css } from "styled-components";
import { backgroundLinearGradient } from "../styledHelpers";

const StyledProfileWrapper = styled.div`
    ${backgroundLinearGradient('to bottom left', 'black', 'grey')};
    display: flex;
    height: 100vh;
    justify-content: center;
`;

const StyledCardWrapper = styled.div`
    border: 2px var(--app-white) solid;
    border-radius: 50px;
    box-shadow: 5px 5px 10px var(--app-grey);
    display: flex;
    height: 90vh;
    justify-content: center;
    margin-top: 20px;
    width: 90%;
    
    @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         border: none;
         box-shadow: none;
       }
`;

const StyledPanel = styled.div`
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-white)`};
  border-radius: 2vw;
  margin: 2vw;
  padding: 3vw;
  overflow: scroll;
  width: ${props => props.size || 10}%;
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         display: ${(props) => props.fullSize ? `block` : `none` };
         margin: 0 auto;
         width: ${(props) => props.fullSize ? `${props.mobileWidth}vw` : `90vw` };
       }
`;

const CardItem = styled.div`
  border: 1px solid ${props => `var(--app-${props.borderColor})`};
  border-radius: 10px;
  box-shadow: 5px 5px 10px ${props => `var(--app-${props.borderColor})`};
  color: var(--app-black);
  display: flex;
  flex-direction: ${props => props.avatar ? 'column' : 'row'};
  font-weight: bold;
  justify-content: center;
  margin: auto auto 1px;
  min-height: 30px;
  padding: 5px;
  text-align: center;
  width: 90%;
  
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
      margin-bottom: 1rem;
      width: 90%;
    `};
  
  .label, .card-value {
    font-size: 1.5rem;
    height: 100%;
    margin: auto 0;
    
    @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
           font-size: 2.5rem;
       }
  }
  
  div.label {
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px var(--app-grey);
    font-weight: normal;
    padding: 1rem;
    width: 30%;
  }
  
  div.card-value {
    width: 70%;
  }
  
  img {
    border: 5px solid var(--app-white);
    border-radius: 50%;
    box-shadow: 3px 3px 3px var(--app-white);
    height: 10rem;
    margin: 0 auto;
    width: 10rem;
    
    @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         height: 25rem;
         width: 25rem;
       }
  }
`;

const MenuButton = styled.button`
  background: var(--app-grey);
  border: 1px solid var(--app-white);
  border-radius: 10px;
  box-shadow: 5px 5px 10px var(--app-white);
  color: var(--app-black);
  font-size: 1rem;
  font-weight: bold;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
  
  ${props => props.upload && css`
        border-width: 2px;  
        height: 2.5rem;
        margin: 1rem auto;
        width: 45%;
        
       @media only screen 
         and (min-device-width: 280px)
         and (max-device-width: 1024px) {
           font-size: 1.7vh;
           height: 3.7vh;
           width: 80%;
         }
    `};
  
  svg {
    float: left;
    margin-left: 1rem;
  }
`;

export { StyledProfileWrapper, StyledCardWrapper, StyledPanel, CardItem, MenuButton };
