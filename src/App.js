import React from "react";
import { Switch, Route } from "react-router-dom";

import SearchProvider from "./SearchProvider";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import UsersList from "./components/users/UsersList";
import ReposList from "./components/repos/ReposList";
import RepoItem from "./components/repo-item/RepoItem";

import "./shared/utilities/style.scss";

function App() {
  return (
    <SearchProvider>
      <Header />
      <Switch>
        <Route path="/repos/:username/:reponame" component={RepoItem} />
        <Route path="/:username/repos" component={ReposList} />
        <Route path="/" component={UsersList} />
      </Switch>
      <Footer />
    </SearchProvider>
  );
}

export default App;
