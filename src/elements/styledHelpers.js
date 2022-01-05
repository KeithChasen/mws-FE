import { css } from "styled-components";

const backgroundLinearGradient = (direction, color1, color2) => css`
      background: linear-gradient(
            ${direction ? `${direction},` : null}
            var(--app-${color1}),
            var(--app-${color2}) 
          )
`;

const inputStyles = css`
  border: 0.2rem solid var(--app-grey);
  border-radius: 0.5rem;
  display: inline-block;
  font-size: 1.7rem;
  &:focus {
     outline-color: var(--app-grey);
  }
`;

const friendsPanelStyles = css`
  background: var(--app-white);
  border: 1px solid var(--app-white);
  display: flex;
  flex-direction: row;
`;


export { backgroundLinearGradient, inputStyles, friendsPanelStyles };