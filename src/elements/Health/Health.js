import styled from "styled-components";
import { backgroundLinearGradient } from "../styledHelpers";

const HealthWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${backgroundLinearGradient('to bottom left', 'grey', 'white')};
`

const HealthHeaderWrapper = styled.div`
  height: 10%;
  width: 100%;
`;

const ActivityWrapper = styled.div`
  height: 90%;
  width: 100%;
`;

const FormWrapper = styled.div`
  width: 100vw;
  
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    label {
      font-weight: bold;
    }
    
    select {
      width: 80vw;
      height: 5vh;
      border-radius: .5rem;
    }
  }
`

export { HealthWrapper, HealthHeaderWrapper, ActivityWrapper, FormWrapper }
