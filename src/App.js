import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";

import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";

function App() {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact  >
          <Home />
        </Route>
        <Route path="/products" exact  >
          <Products />
        </Route>
        <Route path="/services" exact  >
          <Services />
        </Route>
        <Route path="/sign-up" exact  >
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
