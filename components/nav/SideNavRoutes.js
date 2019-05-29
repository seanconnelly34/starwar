import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import Users from "../Users";
import UserProfile from "../UserProfile";
import Favorites from "../Favorites";

function SideNavRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/Users" component={Users} />
      <Route exact path="/Users/:name" component={UserProfile} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  );
}

export default SideNavRoutes;
