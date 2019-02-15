import React from "react";
import { Switch, Route } from "react-router-dom";

import NoMatch from "./components/NoMatch";
import Body from "../body/Body"
import ProfileDetailed from "../user/detailed/Profile"

export default function () {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Body}></Route>
        <Route path="/user/:id" component={ProfileDetailed}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </React.Fragment>
  )
}
