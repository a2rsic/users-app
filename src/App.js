import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import UsersList from "./components/users/UsersList";
import ReposList from "./components/repos/ReposList";
import RepoItem from "./components/repo-item/RepoItem";

import "./shared/utilities/style.scss";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/repo-item" component={RepoItem} />
        <Route path="/:username/repos" component={ReposList} />
        <Route path="/" component={UsersList} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
