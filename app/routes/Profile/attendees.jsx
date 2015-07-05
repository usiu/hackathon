import React from "react";
import Router from "react-router";
import $ from "jquery";

var { Link } = Router;

import BackboneMixin from "./../../utils/backbone-mixin";

import Profiles from "./../../collections/users";
var profiles = Profiles.getInstance();

import ProfileDetail from "./detail";

class Attendees extends BackboneMixin {
	getBackboneCollections() {
		return [profiles];
	}
	render() {
		return (
			<div className="main wrapper row">
				<ul>
					<li>{profiles.map(function(profile) {
						return <ProfileDetail model={profile} key={profile.id}/>;
					})}</li>
				</ul>
			</div>
		);
	}
	componentDidMount() {
		super.componentDidMount();
		profiles.fetch();
	}
}

export default Attendees;
