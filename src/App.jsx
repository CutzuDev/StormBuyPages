import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#395b80",
      },
      secondary: {
        main: "#7dbad2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
