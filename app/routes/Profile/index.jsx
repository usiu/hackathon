var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var $ = require("jquery");

module.exports = React.createClass({
	render: function() {
		return <RouteHandler />;
	},
	componentDidMount: function() {
		$('title').html('Profile &mdash; Autobay');
		$('body').removeClass('login');
	},
});
