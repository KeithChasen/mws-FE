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
  
  span {
    font-weight: normal;
    border-bottom: 1px solid ${props => props.theme.black};
    border-right: 1px solid ${props => props.theme.black};
    border-top: 1px solid ${props => props.theme.grey};
    border-left: 1px solid ${props => props.theme.grey};
    border-radius: 5px;
    width: 25%;
    padding: 0.3rem;
    box-shadow: 2px 2px 2px 2px ${props => props.theme.grey};
  }
`;

const MenuButton = styled.button`
  width: 100%;
  min-height: 3rem;
  border: 1px solid ${props => props.theme.white};
  border-radius: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px ${props => props.theme.white};
  color: ${props => props.theme.black};
  background: ${props => props.theme.grey};
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  
  svg {
    float: left;
    margin-left: 1rem;
  }
`;

export { StyledProfileWrapper, StyledCardWrapper, StyledPanel, CardItem, MenuButton };
