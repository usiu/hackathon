import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class FAQ extends React.Component {
	render() {
	
		return <div className="page main wrapper">
				<div className="title-wrapper">
					<h1>About</h1>
				</div>
        <div className="guide row">
          <p>The USIU-Africa Hackathon is the university’s once a semester student organised hackathon.</p>

          <p>Our first edition <Link to="history">last semester</Link> was a massive success and we are really excited to be back for a second time this summer.</p>

          <p>Come July 18, we are bringing together 140 developers and ideators from USIU&ndash;Africa and universities across Nairobi together to learn new technologies and build awesome things.</p>

          <h4>Hack Some Hardware</h4>
          <p>We are proud to announce for <strong>Hardware Hacking</strong> the very first time this semester.</p>
          <p>Wire up your Arduino&rsquo;s and RaspberryPi&rsquo;s and connect to them sensors that measure things in the real world to the internet.</p>
          <p>Don&rsquo;t have your own hardware? Don&rsquo;t worry about it. We have Arduino&rsquo;s and RaspberryPi&rsquo;s in stock for you to hack. If we don&rsquo;t have that particular gem you&rsquo;ve been dying to hack, let us know and we&rsquo;ll do our best to get it for you. Feel free to bring in your own hardware as well!</p>

            <h4 title="Everyone is welcome!">Nyote mwakaribishwa!</h4>
            <p>We&rsquo;ve focussed on making our hackathon inclusive, fun and beginner&ndash;friendly. Whether you’re making your first webapp, hardware hacking with an Arduino/RaspberryPi, you are all welcome! We&rsquo;ll have mentors from some of the top tech companies in Nairobi, awesome swag and everything else you need to learn something new and carry out your craziest ideas.</p>
          <p>We want to make this an experience to remember and would love for you to be a part of it.</p>
          
        </div>
		</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

export default FAQ;