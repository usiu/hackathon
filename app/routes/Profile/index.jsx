import React from "react";
import Router from "react-router";
import $ from "jquery";

var { Link } = Router;

import BackboneMixin from "./../../utils/backbone-mixin";

import Profiles from "./../../collections/users";
import API_CONFIG from "../../../api-config";
const API_URL = API_CONFIG.url;
var profile;

import ProfileDetail from "./detail";

class Profile extends BackboneMixin {
	getBackboneCollections() {
		return [profile];
	}
	render() {
		profile = Profiles.getInstance(API_URL + '/users/me');
		profile.fetch();
		return <div className="wrapper row">
				<Link to="members">&larr;Back to members</Link>
					{profile.map(function(p) {
						return <ProfileDetail model={p} key={p.id}/>;
					})}
			</div>;
	}
	componentDidMount() {
		super.componentDidMount();
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

Profile.contextTypes = {
	router: React.PropTypes.func
};

export default Profile;
