import styled, { css } from "styled-components";

const StyledProfileWrapper = styled.div`
  background: linear-gradient(
      to bottom left,
      ${(props) => props.theme.black},
      ${(props) => props.theme.white} 
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
    border: 2px ${props => props.theme.white} solid;
    border-radius: 50px;
    box-shadow: 5px 5px 10px ${props => props.theme.grey};
`;

const StyledPanel = styled.div`
  width: ${props => props.size || 10}%;
  background: ${props => props.theme[props.bgcolor] || props.theme.white};
  padding: 20px;
  margin: 10px;
  border-radius: 50px;
`;

const CardItem = styled.div`
  width: 90%;
  min-height: 30px;
  border: 1px solid ${props => props.theme[props.borderColor]};
  padding: 5px;
  margin: auto auto 1px ;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 5px 10px ${props => props.theme[props.borderColor]};
  color: ${props => props.theme.black};
  font-weight: bold;
  
  p {
    font-weight: normal;
  }
`;

const EditButton = styled.button`
  width: 2rem;
  min-height: 2rem;
  border: 1px solid ${props => props.theme.white};
  border-radius: 10px;
  text-align: center;
  display: grid;
  box-shadow: 5px 5px 10px ${props => props.theme.white};
  color: ${props => props.theme.black};
  background: ${props => props.theme.grey};
  font-weight: bold;
  float: right;
  margin-right: 0.7rem;
  margin-bottom: 1rem;
  
  svg {
    margin: auto;
  }
`;

export { StyledProfileWrapper, StyledCardWrapper, StyledPanel, CardItem, EditButton };
