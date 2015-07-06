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
import ProfileForm from "./form";

import store from "./../../actions/store";

class Profile extends BackboneMixin {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
		  error: false,
		  message: ''
		};
	};
	handleSubmit(event) {
		event.preventDefault();

		var data = {
			gender: this.refs.form.refs.gender.getDOMNode().value,
			name: this.refs.form.refs.name.getDOMNode().value,
			phone_number: this.refs.form.refs.phone_number.getDOMNode().value,
			university: this.refs.form.refs.university.getDOMNode().value,
			hacking_what: this.refs.form.refs.hacking_what.getDOMNode().value,
			age: this.refs.form.refs.age.getDOMNode().value,
			favourite_os: this.refs.form.refs.favourite_os.getDOMNode().value,
		};

		var profile = this.refs.form.props.model;
		profile.set(data);
		return store('sync', profile, Profiles.getInstance(), this, '/');

	};
	getBackboneCollections() {
		return [profile];
	}
	render() {
		profile = Profiles.getInstance(API_URL + '/users/me');
		profile.fetch();
		var self = this;
		return <div className="main wrapper row">
				<Link to="attendees">&larr;Back to list of attendees</Link>
				{this.state.error && (
					<p>{this.state.message}</p>
				)}
				{profile.map(function(p) {
					if(p.get('university') === 'undefined' || p.get('hacking_what') === 'undefined' || p.get('gender') === 'undefined') {
						return <ProfileForm onSubmit={self.handleSubmit.bind(self)} model={p} key={p.id} ref="form" />;
					} else {
						return <div>
							<ProfileDetail model={p} key={p.id} />
							<Link to="profile-edit" className="button hollow green">Edit Profile</Link>
						</div>;
					}
				})}
			</div>;
	}
	componentDidMount() {
		super.componentDidMount();
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
	}
};

Profile.contextTypes = {
	router: React.PropTypes.func
};

export default Profile;
