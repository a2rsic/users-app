import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import UsersList from "./components/users/UsersList";

import "./shared/utilities/style.scss";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <div>
          <UsersList />
        </div>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
