import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import UsersList from "./components/users/UsersList";

import "./shared/utilities/style.scss";
import ReposList from "./components/repos/ReposList";

function App() {
  return (
    <>
      <Header />
      <Switch>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        > */}
        <Route path="/repos" component={ReposList} />
        <Route path="/" component={UsersList} />
        {/* <UsersList /> */}
        {/* <ReposList /> */}
        {/* </div> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
