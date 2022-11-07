import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";

import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
