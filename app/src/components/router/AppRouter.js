import React from "react";
import { Switch, Route } from "react-router-dom";

import NoMatch from "./components/NoMatch";
import Home from "../home/Home"
import ProfileDetailed from "../user/detailed/Profile"

export default function () {
  return (
    <React.Fragment>
      <Switch basename={'/'}>
        <Route exact path="/" component={Home}></Route>
        <Route path="/user/:id" component={ProfileDetailed}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </React.Fragment>
  )
}
