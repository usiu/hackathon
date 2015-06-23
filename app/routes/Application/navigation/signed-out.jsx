import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class SignedOutNavigation extends React.Component{
  handleClick(event) {
    event.preventDefault();
    $('body').addClass('show-register');
    $('html').addClass('no-scroll');
  }
	render() {
		return <nav>
			<div className="logo-wrapper lf">
				<Link to="home-signedOut"><img src="/assets/images/logo.png" /></Link>
			</div>
			<div className="links rf">
				<Link to="about">About</Link>
				<Link to="sponsors">Sponsors</Link>
				<Link to="schedule">Schedule</Link>
				<Link to="faq">FAQ</Link>
				<a href="" onClick={this.handleClick}>Register</a>
			</div>
		</nav>;
	}
}

export default SignedOutNavigation;