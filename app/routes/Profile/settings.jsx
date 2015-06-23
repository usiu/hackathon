var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
	render: function() {
		return <div>
			<h1>
				<i className="oi" data-glyph="cog" aria-hidden="true"></i>				
				My Profile Settings
			</h1>
		</div>;
	}
});
