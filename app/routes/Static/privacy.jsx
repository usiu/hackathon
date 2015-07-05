import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class FAQ extends React.Component {
	render() {

		return <div className="page main wrapper">
          <div className="title-wrapper">
            <h1>Privacy Policy</h1>
          </div>
          <article className="guide row">
						<p>This Privacy Policy governs the manner in which USIU-Africa Hackathon collects, uses, maintains and discloses information collected from users (each, a "User") of the https://www.usiuhackathon.me/ website ("Site"). This privacy policy applies to the Site and all products and services offered by USIU-Africa Hackathon.</p>

						<h4>Personal identification information</h4>

						<p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>

						<h4>Non-personal identification information</h4>

						<p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>

						<h4>Web browser cookies</h4>

						<p>Our Site may use 'cookies' to enhance User experience. User&rsquo;s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>

						<h4>How we use collected information</h4>

						<p>USIU-Africa Hackathon may collect and use Users personal information for the following purposes:
						- To improve customer service
						Information you provide helps us respond to your customer service requests and support needs more efficiently.
						<br />
						- To improve our Site
						We may use feedback you provide to improve our products and services.
						<br />
						- To send periodic emails
						<br />
						</p>
						<p>We may use the email address to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
						How we protect your information</p>

						<p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

						<p>Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.</p>

						<h4>Sharing your personal information</h4>

						<p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>

						<h4>Changes to this privacy policy</h4>

						<p>USIU-Africa Hackathon has the discretion to update this privacy policy at any time. When we do, we will send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>

						<h4>Your acceptance of these terms</h4>

						<p>By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>

						<h4>Contacting us</h4>

						<p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
						<br />
						The USIU-Africa Hackathon Team
						<br />
						<a href="mailto:itclub@clubs.usiu.ac.ke">itclub@clubs.usiu.ac.ke</a>
						</p>

						This document was last updated on July 04, 2015
						<br />
          </article>
		</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

export default FAQ;
