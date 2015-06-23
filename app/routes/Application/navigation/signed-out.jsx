import React from "react";
import Router from "react-router"
var { Link } = Router;

class SignedOutNavigation extends React.Component{
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
				<Link to="home-signedOut">Register</Link>
			</div>
		</nav>;
	}
}

export default SignedOutNavigation;