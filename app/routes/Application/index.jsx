import React from "react";
import Router from "react-router"
var { RouteHandler } = Router;

class Application extends React.Component {
	render() {
		return <RouteHandler />;
	}
};

export default Application;