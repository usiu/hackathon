import React from "react";
import Router from "react-router";
var { Route, RouteHandler, Link } = Router;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

//Handlers
import Application from "./routes/Application";
import LoggedIn from "./routes/Application/loggedin";
import LoggedOut from "./routes/Application/loggedout";

import Home from "./routes/Static";
import About from "./routes/Static/about";
import Sponsors from "./routes/Static/sponsors";
import Schedule from "./routes/Static/schedule";
import FAQ from "./routes/Static/faq";
import LastSemester from "./routes/Static/lastsemester"

import NotFound from "./routes/NotFound";

import Login from "./routes/Login";
import Signup from "./routes/Signup";

import Profile from "./routes/Profile";
import ProfileSettings from "./routes/Profile/settings";
import Members from "./routes/Profile/members";

export default (

  <Route handler={Application}>

    <Route name="login" path="/login" handler={Login} />
    <Route name="signup" path="/signup" handler={Signup} />

    <Route handler={LoggedOut} path="/" name="signed-out">
      <DefaultRoute name="home-signedOut" handler={Home} />
      <Route name="about" path="/about" handler={About} />
      <Route name="sponsors" path="/sponsors" handler={Sponsors} />
      <Route name="schedule" path="/schedule" handler={Schedule} />
      <Route name="faq" path="/faq" handler={FAQ} />
      <Route name="history" path="/last-semester" handler={LastSemester} />

    </Route>

    <Route handler={LoggedIn} path="/" name="app">
      <DefaultRoute name="home-signedIn" handler={Home} />

      <Route name="profile" path="/me" handler={Profile}>
        <Route name="profile-settings" path="settings" handler={ProfileSettings} />
        <DefaultRoute handler={Profile} />
      </Route>

			<Route name="members" path="/members" handler={Members}>
				<Route name="member" path=":username"></Route>
			</Route>

      <NotFoundRoute handler={NotFound}/>
    </Route>
  </Route>
);
