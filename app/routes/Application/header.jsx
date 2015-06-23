import React from "react";
import Router from "react-router"
var { Link } = Router;

import Navigation from "./navigation";

class AppHeader extends React.Component {
	render() {
		return <header>
				<Navigation />
				<a href="#" className="menu-icon"><div className="patty"></div></a>
			</header>;
	}

};

export default AppHeader;