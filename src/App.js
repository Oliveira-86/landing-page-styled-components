import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";

import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <Router > */}
        <Navbar />
        <Home />
        <Switch>
          <Route />
        </Switch>
        <GlobalStyle />
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
