import { Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";

import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route path="/" exact component={Home} />
      </Switch> */}
      <GlobalStyle />
    </Router>
  );
}

export default App;
