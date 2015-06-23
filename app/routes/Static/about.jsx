import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class FAQ extends React.Component {
	render() {
	
		return <div>
		</div>;
	}
	componentDidMount() {
		$('title').html('');
		$('body').removeClass('login');
	}
};

export default FAQ;