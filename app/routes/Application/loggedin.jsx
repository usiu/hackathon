import React from "react";
import Router from "react-router"
var { RouteHandler } = Router;

import Auth from "./../../utils/auth";

import Header from "./header";
import Footer from "./footer";

var requireAuth = (Component) => {
	return class Authenticated extends React.Component {
		static willTransitionTo(transition) {
			if (!Auth.isLoggedIn()) {
				transition.redirect('/login', {}, {'nextPath' : transition.path});
			}  
		}
		render() {
		  return <Component {...this.props}/>
		}
	}
};

var SignedIn = requireAuth(class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return <div>
		<Header />
		<div className="row">
			<RouteHandler />
		</div>
		<Footer /></div>;
	}
});

export default SignedIn;