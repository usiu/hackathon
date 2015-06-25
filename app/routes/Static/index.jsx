import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class Home extends React.Component {
  handleRegisterClick(event) {
    event.preventDefault();
    $('body').addClass('show-register');
    $('html').addClass('no-scroll');
  }
	render() {
	
		return <div className="home main wrapper row">
			<div className="cta">
				<h2>The USIU-Africa IT Club Presents</h2>
				<h1>Hackathon Summer 2015</h1>
				<h3>Saturday, 18 July</h3>
        <a href="" className="button square green" onClick={this.handleRegisterClick}>Register</a>
			</div>
			<div className="see-last-sem">
				<img src="/assets/images/winner.jpg" />
				<Link to="history" className="button hollow white">See what we did last semester</Link>
			</div>
		</div>
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

Home.contextTypes = {
  router: React.PropTypes.func
};


export default Home;