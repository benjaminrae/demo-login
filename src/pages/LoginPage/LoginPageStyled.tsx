import styled from "styled-components";

const LoginPageStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    width: 40%;
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  }

  @media only screen and (max-width: 1100px) {
    svg {
      display: none;
    }
  }
`;

export default LoginPageStyled;
