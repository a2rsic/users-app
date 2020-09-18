import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/header/Header";

function App() {
  return (
    <Switch>
      <Header />
    </Switch>
  );
}

export default App;
