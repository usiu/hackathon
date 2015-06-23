import React from "react";
import Router from "react-router"
var { Link, RouteHandler } = Router;
import $ from "jquery";

import Auth from "./../../utils/auth";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: false
		};
	}
	handleSubmit(event) {
		event.preventDefault();
		var nextPath = this.context.router.getCurrentQuery().nextPath;
		
		var email = this.refs.email.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;
		var remember = this.refs.remember.getDOMNode().value === 'on' ? true : false;
		
		var self = this;
		
		//Auth fxn here
		return Auth.login(email, password, remember, function (loggedIn, res) {
			
			if(!loggedIn)
				return self.setState({ error: true, msg: JSON.parse(res.text).error });
				
			if(nextPath) {
				self.context.router.transitionTo(nextPath);
			} else {
				self.context.router.transitionTo('/');
			}
			
			return;
			
		});
				
	}
	render() {
		return <div className="main-content login">
				<form id="login" onSubmit={this.handleSubmit.bind(this)}>
					<img src="/assets/images/logo.png" className="hidden" />
					{this.state.error && (<b>{this.state.msg}</b>)}
				
					<p>
						<label htmlFor="email" className="field">Email</label>
						<input type="email" ref="email" />
					</p>
					<p>
						<label htmlFor="password" className="field">Password</label>
						<input type="password" ref="password" />
					</p>
					
					<p>
						<label htmlFor="password" className="field no-bold">Remember password</label>
						<input type="checkbox" ref="remember" />
					</p>

					<p className="no-border">
						<a className="forgot-password" href="#">Forgot password?</a>
					</p>
					<button>Login</button>
				</form>
        	</div>				
	}
	componentDidMount() {
		$('title').html('Login &mdash; Autobay');
	}
}

Login.contextTypes = {
  router: React.PropTypes.func
};


export default Login;