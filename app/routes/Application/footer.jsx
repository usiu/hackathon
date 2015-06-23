import React from "react";
import Router from "react-router"

var { Link } = Router;

class AppFooter extends React.Component {
	render() {
		return <footer className="clearfix" role="footer">
            <div className="col-1-4">
                <h3>Got questions?</h3>
                <a href="mailto:mailto:itclub@clubs.usiu.ac.ke">Email</a>
                <a href="http://twitter.com/USIUHackathon">Twitter</a>
                <a href="http://www.facebook.com/USIUHackathon">Facebook</a>
                <a href="http://github.com/USIU-Hackathon/">Github</a>

                <p className="privacy-terms-links"><a href="/terms">Terms and Conditions</a> <a href="/privacy">Privacy Policy</a></p>

            </div>

            <div className="col-1-4">
                <h3>Presented By</h3>
				<img src="/assets/images/club_logo.png" />
            </div>

            <div className="credits col-1-4">
				<h3>{['Designed ', <span>&amp;</span>, ' Developed', <br />, '(with <3 and lots of Tea', <span>&amp;</span>, 'Coffee)']}</h3>
                <a href="http://twitter.com/IanJuma" title="Ian Juma">@IanJuma</a>
                <a href="http://twitter.com/pbombo">@pbombo</a>
            </div>

        </footer>

	}

};

export default AppFooter;