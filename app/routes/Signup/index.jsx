import React from "react";
import Router from "react-router"
var { Link, RouteHandler } = Router;
import $ from "jquery";
import _ from "lodash";

import Auth from "./../../utils/auth";

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: false,
		  msg: ''
		};
	}
	handleSubmit(event) {
		event.preventDefault();
		
		var data = {};
		data.name = this.refs.name.getDOMNode().value;
		data.email = this.refs.email.getDOMNode().value;
		data.password = this.refs.password.getDOMNode().value;
		data.conf_password = this.refs.conf_password.getDOMNode().value;
		
		if(!_.isEqual(data.password, data.conf_password)) {
			this.setState({error: true, msg: 'Passwords do not match'})
			return;
		}
		
		var self = this;

		//Auth fxn here
		return Auth.signup(data, this, function(signedUp, res) {
			if(!signedUp) {
				return self.setState({ error: true, msg: JSON.parse(res.text).error });
			}
			
			self.context.router.transitionTo('/tour');			
			return;
			
		});
				
	}
	render() {
		return <div className="main-content">
				<h1>Get started with a free account</h1>
				<p>Already have an Autobay account? <Link to="login">Login</Link></p>
				<form id="signup" onSubmit={this.handleSubmit.bind(this)}>
					{this.state.error && (<b>{this.state.msg}</b>)}
				
					<p>
						<label htmlFor="name" className="field">Your name</label>
						<input type="text" ref="name" />
					</p>
					<p>
						<label htmlFor="email" className="field">Email</label>
						<input type="email" ref="email" />
					</p>
					<p>
						<label htmlFor="password" className="field">Password</label>
						<input type="password" ref="password" />
					</p>
					<p>
						<label htmlFor="conf_password" className="field">Confirm Password</label>
						<input type="password" ref="conf_password" />
					</p>

					<button>Create My Account</button>
					<p>By clicking this button, you agree to Autobay's Terms of Use</p>
				</form>
        	</div>
	}
	componentDidMount() {
		$('title').html('Signup &mdash; Autobay');
	}
}

Signup.contextTypes = {
  router: React.PropTypes.func
};


export default Signup;