import styled from "styled-components";
import sizes from "../../styles/sizes";

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.colorPrimary};
  border-radius: 0.5rem;
  padding: ${sizes.button.padding};

  &:not(disabled):hover {
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.backgroundColor};
  }

  &.button--inverted {
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.backgroundColor};
    &:hover {
      color: ${(props) => props.theme.backgroundColor};
      background-color: ${(props) => props.theme.colorPrimary};
    }
  }

  &:disabled {
    &:hover {
      color: ${(props) => props.theme.backgroundColor};
      background-color: ${(props) => props.theme.colorPrimary};
    }
    cursor: not-allowed;
    filter: grayscale(0.5);
    opacity: 0.5;
  }
`;

export default ButtonStyled;
