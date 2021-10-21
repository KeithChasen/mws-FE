import styled, { css } from "styled-components";

const sharedStyles = css`
   background: var(--app-grey);
   height: 30px;
   border-radius: 5px;
   border: 1px solid var(--app-grey);
   padding-left: 1rem;
`;

const StyledFormWrapper = styled.div`
    background: linear-gradient(
      var(--app-white),
      var(--app-black)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
     @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
     align-items: flex-start;
   }
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  background: var(--app-white);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px 0 var(--app-black);
  
  @media only screen 
       and (min-device-width: 280px)
       and (max-device-width: 1024px) {
     width: 90%;
     margin-top: 2vh;
     
     h1 {
       margin-bottom: 2rem;
       font-size: 3rem;
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
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

const StyledFileLabel = styled.label`
    position: relative;
    width: 20vw;
    height: 3vh;
    border-radius: 5px;
    border: 1px solid var(--app-white);
    background: linear-gradient(40deg, var(--app-white), var(--app-black));
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--app-white);
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform .2s ease-out;
    margin-left: auto;
    margin-right: auto;
    
    @media only screen
      and (min-device-width: 280px)
      and (max-device-width: 1024px) {
        width: 70vw;
        font-size: 3rem;
      }
`;

const StyledFileButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4vh;
  padding: 0 1vw;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: 1px solid var(--app-white);
  margin-top: 1vh;
  width: 15vw;
  font-size: 1.5rem;
  color: var(--app-black);
  
  @media only screen
      and (min-device-width: 280px)
      and (max-device-width: 1024px) {
        width: 70vw;
        font-size: 3rem;
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
  display: inline-block;
  margin-right: 1rem;
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-grey)`};
  color: ${(props) => props.bgcolor ? `var(--app-white)` : `var(--app-black)`};
  font-size: .9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 1vh;
  
  @media only screen 
   and (min-device-width: 280px)
   and (max-device-width: 1024px) {
    width: 93%;
    font-size: 3rem;
    padding-left: 1rem;
  }
`;

const StyledError = styled.div`
  color: var(--app-red);
  height: 20px;
  font-style: italic;
  font-weight: bold;
`;

const StyledMessage = styled.div`
  margin-top: 5px;
  color: var(--app-green);
  font-style: italic;
  font-weight: bold;
  height: 20px;
`;

const StyledPopUp = styled.div`
  min-width: 30vw;
  position: fixed;
  top: 5vh;
  left: 5vw;
  border: 1px solid var(--app-white);
  padding: 1rem;
  border-radius: 10px;
  background: var(--app-green);
  color: var(--app-white);
  z-index: 9;
  transition: width 2s, height 4s;
  opacity: .8;
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
