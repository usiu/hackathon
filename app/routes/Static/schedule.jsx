import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class FAQ extends React.Component {
	render() {

		return <div className="main content page schedule wrapper" role="main">
			<section>
				<div>
				  <header>
					<h2>Saturday, 18<span className="hour">th</span> July 2015</h2>
					<h1>Schedule</h1>
					<p>It&rsquo;s the USIU-Africa Hackathon; an action-packed event, so let’s get together in the company of a few friends, and hack out some solutions</p>
					<dl>
					  <dt>When</dt>
					  <dd>9<span className="hour">AM</span> &mdash; 7:40 <span className="hour">PM</span></dd>
					  <dt>Where</dt>
					  <dd>USIU-Africa Science Centre</dd>
					</dl>
				  </header>
				  <div className="main">
					<ul className="events">
					  <li className="clearfix">
						<p>9<span className="hour">am</span></p>
						<h2>Idea Pitches</h2>
						<div>
						  <p>Attendees pitch their ideas to the audience, with each team having about <strong>3 mins </strong>
							without the use of slides and powerpoints. Need help with your <a href="http://scottberkun.com/essays/38-how-to-pitch-an-idea/">elevator pitch?</a>
						  </p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>9:30<span className="hour">am</span></p>
						<h2>Team selection and announcements</h2>
						<div>
						  <p>Attendees without teams or product ideas join a team whose idea interests them.</p>
						</div>
						<aside></aside>
					  </li>
					  <li className="clearfix">
						<p>9:50<span className="hour">am</span></p>
						<h2>Start Hacking!</h2>
						<div>
						  <p>Teams begin hacking!</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>11:30<span className="hour">am</span></p>
						<h2>Snacking!</h2>
						<div>
						  <p>Teams break off for snacks and drinks.</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>11:50<span className="hour">am</span></p>
						<h2>Teams continue hacking!</h2>
						<div>
						  <p>The hacks go on!</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>1<span className="hour">pm</span></p>
						<h2>Lunch</h2>
						<div>
						  <p>Teams break off for lunch at the cafeteria.</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>1:40<span className="hour">pm</span></p>
						<h2>Teams continue hacking</h2>
						<div>
						  <p>Teams continue with their hacks and also snack at will.</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>5:40<span className="hour">pm</span></p>
						<h2>Hand in final presentations</h2>
						<div>
						  <p>Submission deadline for projects. Links to github and other VCS are allowed.
						   <br /> All teams <strong>must stop</strong> hacking on their product ideas.</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>5:50<span className="hour">pm</span></p>
						<h2>Team presentations</h2>
						<div>
						  <p>Each team will receive between three to five minutes to describe their problem, how they intend to solve it, and demo what they come up with. <br /> It’s a <strong>hard limit</strong>, and teams will be cut off if they go over the stipulated time.
		Q&amp;A&rsquo;s are allowed after each teams presentation.
		<br /> <strong>Keep things moving:</strong> Part of the competition is being able to concisely describe what you did.</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>7:00<span className="hour">pm</span></p>
						<h2>Scoring period</h2>
						<div>
						  <p>Judges break off to score the teams. <a href="https://github.com/USIU-Hackathon/guide/blob/master/hackathon.md#judging-criteria-scoring">Scoring sheet.</a></p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>7:20<span className="hour">pm</span></p>
						<h2>Announcement of winning team and MVP's</h2>
						<div>
						  <p>With such an appealing grand prize on the line, we want to make sure that the judging criteria is as transparent and fair as possible. <br /> Given the time constraints and available resources, teams are not required to have a fully functioning demo of their product. Instead, everyone is given the breakdown of exactly what the <a href="https://github.com/USIU-Hackathon/guide/blob/master/hackathon.md#judging-criteria-scoring">scoring sheet</a> will look like, so that they plan their presentations accordingly.</p>
						</div>
					  </li>
					  <li className="clearfix">
						<p>7:40<span className="hour">pm</span></p>
						<h2>Team bonding</h2>
						<div>
						  <p>With the hackathon concluded, attendees take part in a <strong>photo session</strong> and a soiree of sorts.</p>
						</div>
					  </li>

					</ul>
				  </div>
				</div>
			  </section>
		</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');

		//Sticky Effect
		window.onscroll = function() {
				if ($(window).scrollTop() < 120) {
						$('section > div > header').removeClass('sticky');
						$('footer').removeClass('shadow');
				} else {
						$('section > div > header').addClass('sticky');
						$('footer').addClass('shadow');
				}
		}
	}

	componentWillUnmount() {
		window.on
	}
};

export default FAQ;
