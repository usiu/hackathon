import React from "react";
import Router from "react-router"
var { RouteHandler } = Router;

import Header from "./header";
import Footer from "./footer";

class SignedOut extends React.Component {
	render() {
		return <div>
			<Header />
			<div className="row">
				<RouteHandler />
			</div>
			<Footer />
			</div>;
	}
};

export default SignedOut;