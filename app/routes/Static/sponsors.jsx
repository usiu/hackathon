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
				<h3>Gold Sponsors</h3>
				<ul className="gold">
					<li><a href=""><img src="" /></a></li>
				</ul>
				<h3>Silver Sponsors</h3>
				<ul className="silver">
					<li><a href=""><img src="" /></a></li>
				</ul>

				<h3>Bronze Sponsors</h3>
				<ul className="bronze">
					<li><a href="http://www.digitalocean.com"><img src="/assets/images/DO_Logo_Horizontal_Blue.png" /></a></li>
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