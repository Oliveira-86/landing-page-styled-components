import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";

import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <NavBar />
      <GlobalStyle />
    </Router>
  );
}

export default App;
