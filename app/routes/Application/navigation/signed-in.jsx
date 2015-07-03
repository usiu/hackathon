import React from "react";
import Router from "react-router";
var { Link } = Router;

import Auth from "./../../../utils/auth";

class SignedInNavigation extends React.Component {
	logout(event) {
		event.preventDefault();
		var self = this;
		Auth.logout(function(success, res) {
			if(success) {
				self.context.router.transitionTo('/');
			} else {
				//Todo: display error
			}
		});
	}
	render() {
		return <nav className="signed-in">
			<div className="links row">
				<ul className="lf">
					<li>
						<Link to="profile" className="account">
							{
								this.props.model.map(function(profile) {
									return <img className="avatar" src={profile.get('profile_url')} />
								})
							}
							<span className="name">{
								this.props.model.map(function(profile) {
									return profile.get('name')
								})
							}</span>
							<span className="caret"></span>
						</Link>
						<ul>
							<li><Link to="profile-settings">Settings</Link></li>
							<li><a href="/logout" onClick={this.logout.bind(this)}>Logout</a></li>
						</ul>
					</li>
				</ul>
				<Link to="/">Home</Link>
				<Link to="members">Members</Link>
				<div className="rf">
					<Link to="about">About</Link>
					<Link to="sponsors">Sponsors</Link>
					<Link to="schedule">Schedule</Link>
					<Link to="faq">FAQ</Link>
				</div>
			</div>
		</nav>;
	}
}

SignedInNavigation.contextTypes = {
  router: React.PropTypes.func
};

export default SignedInNavigation;
