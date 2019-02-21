import React from "react";
import { Switch, Route } from "react-router-dom";

import NoMatch from "./components/NoMatch";
import Home from "../home/Home"
import ProfileDetailed from "../user/detailed/Profile"

export default function () {
  return (
    <React.Fragment>
      <Switch basename={'/mb-react-learninig'}>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}></Route>
        <Route path={`${process.env.PUBLIC_URL}/user/:id`} component={ProfileDetailed}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </React.Fragment>
  )
}
