import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
