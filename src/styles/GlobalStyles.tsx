import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

html {
  font-size: 22px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

img {
  display: block;
  max-width: 100%;
}

ul {
    list-style: none;
    list-style-position: outside;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__group {
    display: flex;
    flex-direction: column
  }

  &__input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid ${colors.navyBlue};
  }

  &__link {
    font-weight: 800;
    color: ${colors.navyBlue};
  } 

  &__error {
    &-text {
      font-weight: 800;
      color: red;
    }
  }
}
`;

export default GlobalStyles;
