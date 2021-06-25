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
`;

const StyledPanel = styled.div`
  width: ${props => props.size || 10}%;
  background: ${(props) => props.bgcolor ? `var(--app-${props.bgcolor})` : `var(--app-white)`};
  padding: 20px;
   ${ ({ fullSize }) => fullSize ? css`margin: auto` : css`margin: 10px` };
  border-radius: 50px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
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
  flex-direction: column;
  box-shadow: 5px 5px 10px ${props => `var(--app-${props.borderColor})`};
  color: var(--app-black);
  font-weight: bold;
  
  ${({ avatar }) => avatar && css`
      background: var(--app-grey);
      width: 80%;
      margin-bottom: 1rem;
    `};
  
  span {
    font-weight: normal;
    border-bottom: 1px solid var(--app-black);
    border-right: 1px solid var(--app-black);
    border-top: 1px solid var(--app-grey);
    border-left: 1px solid var(--app-grey);
    border-radius: 5px;
    width: 25%;
    padding: 0.3rem;
    box-shadow: 2px 2px 2px 2px var(--app-grey);
  }
  
  img {
    width: 10rem;
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    border: 5px solid var(--app-white);
    box-shadow: 3px 3px 3px var(--app-white);
  }
`;

const MenuButton = styled.button`
  width: 100%;
  min-height: 3rem;
  border: 1px solid var(--app-white);
  border-radius: 10px;
  text-align: center;
  box-shadow: 5px 5px 10px var(--app-white);
  color: var(--app-black);
  background: var(--app-grey);
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  
  ${({ upload }) => upload && css`
        width: 35%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        min-height: 2rem;
        border-width: 3px;
    `};
  
  svg {
    float: left;
    margin-left: 1rem;
  }
`;

export { StyledProfileWrapper, StyledCardWrapper, StyledPanel, CardItem, MenuButton };
