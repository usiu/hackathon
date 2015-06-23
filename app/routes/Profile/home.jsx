var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
	render: function() {
		return <div>
			<h1>My Profile</h1>
			<Link to="profile-settings">Settings</Link>
			<br />
			<Link to="profile-history">Transactions</Link>
			<br />
			<Link to="profile-cars">My Cars</Link>
			<br />
		</div>;
	}
});
