import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class Sponsors extends React.Component {
	render() {

		return 	<div className="page main wrapper">
			<div className="title-wrapper col-2-5">
				<p>The companies that make this possible</p>
			</div>
			<div className="sponsor-gallery row">
				<ul className="gold">
          <li><a href="https://www.africastalking.com/"><img src="/assets/images/at_logo.png" /></a></li>
          <br />
          <li><a href="https://angani.co/"><img src="/assets/images/angani.png" style="height:5em;"/></a></li>
				</ul>
				<ul className="bronze">
					<li><a href="https://www.digitalocean.com/"><img src="/assets/images/DO_Logo_Horizontal_Blue.png" /></a></li>
				</ul>

			</div>
		</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

export default Sponsors;
