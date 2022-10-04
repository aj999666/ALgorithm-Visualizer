import SortingVisualizer from "./components/SortingVisualizer";
import "./utils.css";
import "./variables.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

import "./variables.css";
import "./utils.css";
import Model from "./components/Model/Model";
import PathfindingVisualizer from "./components/PathfindingVisualizer";
import sortData from "./sortingTutorial";
import pathData from "./pathfindingTutorial";

function App() {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    setShowModel(true);
  }, []);

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#1d566e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact>
          <div className={"App"}>
            <SortingVisualizer showModel={(boolean) => setShowModel(boolean)}>
              <Model
                show={showModel}
                showModel={(boolean) => setShowModel(boolean)}
                modelData={sortData}
              />
            </SortingVisualizer>
          </div>
        </Route>
        <Route path="/path-finding-algos">
          <PathfindingVisualizer showModel={(boolean) => setShowModel(boolean)}>
            <Model
              show={showModel}
              showModel={(boolean) => setShowModel(boolean)}
              modelData={pathData}
            />
          </PathfindingVisualizer>
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
