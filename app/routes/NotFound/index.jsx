import React from "react";
import Router from "react-router"

var { Route, RouteHandler, Link } = Router;

class NotFound extends React.Component {
	render() {
		return <div>
			<h2>Not found</h2>
			<p>The page you requested was not found.</p>
		</div>;
	}
};

export default NotFound;