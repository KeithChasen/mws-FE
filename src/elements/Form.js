import styled, { css } from "styled-components";
import { backgroundLinearGradient } from "./styledHelpers";

const sharedStyles = css`
   background: var(--app-grey);
   border: 1px solid var(--app-grey);
   border-radius: 5px;
   height: 30px;
   padding-left: 1rem;
`;

const StyledFormWrapper = styled.div`
    align-items: center;
    ${backgroundLinearGradient('', 'white', 'black')};
    display: flex;
    height: 100vh;
    justify-content: center;
    
     @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         align-items: flex-start;
     }
`;

const StyledForm = styled.form`
  background: var(--app-white);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px 0 var(--app-black);
  max-width: 500px;
  padding: 40px;
  width: 100%;
  
  @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
         margin-top: 2vh;
         width: 90%;
     
         h1 {
           font-size: 3rem;
           margin-bottom: 2rem;
         }
       }
  
    label {
      font-size: 1.5rem;
      
      @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
        font-size: 2rem;
      }
    }
`;

const StyledFileInput = styled.input`
  height: 0.1px;
  opacity: 0;
  position: absolute;
  width: 0.1px;
`;

const StyledFileLabel = styled.label`
    align-items: center;
    ${backgroundLinearGradient('40deg', 'white', 'black')};
    border: 1px solid var(--app-white);
    border-radius: 5px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    color: var(--app-white);
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    height: 3vh;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    transition: transform .2s ease-out;
    width: 20vw;
    
    @media only screen
      and (min-device-width: 280px)
      and (max-device-width: 1024px) {
        font-size: 3rem;
        width: 70vw;
      }
`;

const StyledFileButton = styled.button`
  align-items: center;
  border: 1px solid var(--app-white);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--app-black);
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 4vh;
  justify-content: center;
  margin: 1vh auto;
  padding: 0 1vw;
  position: relative;
  width: 15vw;
  
  @media only screen
      and (min-device-width: 280px)
      and (max-device-width: 1024px) {
        font-size: 3rem;
        width: 70vw;
      }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${ sharedStyles }
  ${({ error }) => error && css`border: 1px solid var(--app-red)`};
  
  &:focus {
     outline-color: var(--app-black);
   }
   
   @media only screen 
     and (min-device-width: 280px)
     and (max-device-width: 1024px) {
       width: 90%;
   }
`;

const StyledButton = styled.button`
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-grey)`};
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  color: ${(props) => props.bgcolor ? `var(--app-white)` : `var(--app-black)`};
  cursor: pointer;
  display: inline-block;
  font-size: .9rem;
  height: 40px;
  margin-bottom: 1vh;
  margin-right: 1rem;
  padding: 0 15px;
  
  @media only screen 
   and (min-device-width: 280px)
   and (max-device-width: 1024px) {
    font-size: 3rem;
    padding-left: 1rem;
    width: 93%;
  }
`;

const StyledError = styled.div`
  color: var(--app-red);
  font-style: italic;
  font-weight: bold;
  height: 20px;
`;

const StyledMessage = styled.div`
  color: var(--app-green);
  font-style: italic;
  font-weight: bold;
  height: 20px;
  margin-top: 5px;
`;

const StyledPopUp = styled.div`
  background: var(--app-green);
  border: 1px solid var(--app-white);
  border-radius: 10px;
  color: var(--app-white);
  left: 5vw;
  min-width: 30vw;
  opacity: .8;
  padding: 1rem;
  position: fixed;
  top: 5vh;
  transition: width 2s, height 4s;
  z-index: 9;
`;

export {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
  StyledMessage,
  StyledPopUp,
  StyledFileInput,
  StyledFileLabel,
  StyledFileButton
};
