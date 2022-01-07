import styled from "styled-components";

const FormWrapper = styled.form`
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
  
  label, input {
    width: 100%;
  }
  
  select {
    width: 20%;
    margin-right: 1rem;
  }
  
  label, button {
    margin-top: .3rem;
    font-size: 1.5rem;
  }
  
  input, select {
    height: 4vh;
    padding-left: .2rem;
    border-radius: .5rem;
    border: .1rem solid black;
  }
  
  button {
    height: 5vh;
    width: 100%;
    background: var(--app-green);
    border: none;
    border-radius: .5rem;
    font-size: 1.5rem;
    color: var(--app-white);
    
    :hover {
      opacity: .7;
      color: var(--app-black);
    }
  }
`;

export { FormWrapper };
