import styled, { css } from "styled-components";

const sharedStyles = css`
  background: ${(props) => props.theme.grey};
   height: 30px;
   border-radius: 5px;
   border: 1px solid ${(props) => props.theme.black};
   padding-left: 10px;
`;

const StyledFormWrapper = styled.div`
  background: linear-gradient(
      ${(props) => props.theme.white},
      ${(props) => props.theme.black} 
    );
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  background: ${(props) => props.theme.white};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px 0 ${(props) => props.theme.black};
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${ sharedStyles }
  ${({ error }) => error && css`border: 1px solid red`};
`;

const StyledButton = styled.button`
  display: block;
  background: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.black};
  font-size: .9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledError = styled.div`
  color: ${(props) => props.theme.red};
  height: 20px;
  font-style: italic;
  font-weight: bold;
`;

const StyledMessage = styled.div`
  margin-top: 5px;
  color: ${(props) => props.theme.green};
  font-style: italic;
  font-weight: bold;
  height: 20px;
`;

export { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledError, StyledMessage };
