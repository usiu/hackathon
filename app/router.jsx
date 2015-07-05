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
import Privacy from "./routes/Static/privacy";
import Terms from "./routes/Static/terms";

import NotFound from "./routes/NotFound";

import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Blank from "./routes/Static/blank";

import Profile from "./routes/Profile";
import ProfileEdit from "./routes/Profile/edit";
import Attendees from "./routes/Profile/attendees";


export default (

  <Route handler={Application}>

    <Route name="login" path="/login" handler={Login} />
    <Route name="signup" path="/signup" handler={Signup} />
		<Route name="blank" path="/_blank" handler={Blank} />

    <Route handler={LoggedOut} path="/" name="signed-out">
      <DefaultRoute name="home-signedOut" handler={Home} />
			<Route path="/about" handler={About} />
      <Route path="/sponsors" handler={Sponsors} />
      <Route path="/schedule" handler={Schedule} />
      <Route path="/faq" handler={FAQ} />
      <Route path="/last-semester" name="history" handler={LastSemester} />
			<Route path="/privacy" handler={Privacy} />
			<Route path="/terms" handler={Terms} />

    </Route>

    <Route handler={LoggedIn} path="/" name="app">
      <DefaultRoute name="home-signedIn" handler={Home} />

      <Route name="profile" path="/me" handler={Profile} />
			<Route name="profile-edit" path="/me/edit" handler={ProfileEdit} />

			<Route name="attendees" path="/attendees" handler={Attendees}>
				<Route name="member" path=":username"></Route>
			</Route>

      <NotFoundRoute handler={NotFound}/>
    </Route>
  </Route>
);
