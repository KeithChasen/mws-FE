import styled from "styled-components";

const FormWrapper = styled.form`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  
  label, input {
    width: 100%;
  }
  
  select {
    width: 10%;
    margin-right: 1rem;
  }
  
  label, button {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  
  input, select {
    height: 5vh;
    padding-left: 1rem;
    border-radius: .5rem;
    border: .1rem solid black;
  }
  
  button {
    height: 5vh;
    width: 5rem;
  }
`;

export { FormWrapper };
