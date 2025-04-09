import React from "react";
import { Main } from "./components";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { ThemeProvider } from "./context/ThemeContext/ThemeProvider";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
