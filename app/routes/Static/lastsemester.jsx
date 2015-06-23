import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class FAQ extends React.Component {
	render() {
	
		return 	<div className="page main wrapper">
				<div className="title-wrapper">
					<h1>Gallery</h1>
					<p>Last semester&rsquo;s hackathon in pictures</p>
				</div>
				<div className="row">
					<img src="/assets/images/winner.jpg" className="main-image col-1-2" />
					<ul className="gallery-images col-1-2">
						<li>
							<img src="/assets/images/9T4A8251.jpg" />
						</li>
						<li>
							<img src="/assets/images/9T4A8266.jpg" />
						</li>
						<li>
							<img src="/assets/images/9T4A8314.jpg" />
						</li>
						<li>
							<img src="/assets/images/9T4A8314.jpg" />
						</li>
						<li>
							<img src="/assets/images/DSC07673.jpg" />
						</li>
						<li>
							<img src="/assets/images/DSC07638.jpg" />
						</li>
					</ul>
				</div>
			</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

export default FAQ;