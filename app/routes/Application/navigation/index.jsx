import React from "react";
import Router from "react-router"
var { Link } = Router;

import Auth from "./../../../utils/auth";
import BackboneMixin from "./../../../utils/backbone-mixin";

import API_CONFIG from "../../../../api-config";
const API_URL = API_CONFIG.url;

import Profiles from "./../../../collections/users";
var profiles = Profiles.getInstance(API_URL + '/users/me');

import SignedInNav from "./signed-in";
import SignedOutNav from "./signed-out";

class AppNavigation extends BackboneMixin{
	getBackboneCollections() {
		return [profiles]
	}
	render() {
		var Navigation;
		if(Auth.isLoggedIn()) {
			Navigation = SignedInNav;

			return <Navigation model={profiles} />;

		} else {
			Navigation = SignedOutNav;
			return (<Navigation />);
		}
	}
	componentDidMount() {
		super.componentDidMount();
		profiles.fetch();
	}
}

export default AppNavigation;
