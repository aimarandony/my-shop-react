import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavigationBottom from "./components/NavigationBottom";

import Pedido from "./pages/Pedido";
import Supervisar from "./pages/Supervisar";

function App() {
  return (
    <BrowserRouter>
      <div
        className="content"
        style={{ width: "100%", height: "calc(100vh - 80px)", padding: "30px" }}
      >
        <Switch>
          <Route exact path="/supervisar">
            <Supervisar />
          </Route>
          <Route exact path="/pedido">
            <Pedido />
          </Route>
          <Redirect to="/supervisar" />
        </Switch>
      </div>
      <div>
        <NavigationBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
