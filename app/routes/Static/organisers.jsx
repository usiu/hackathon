import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class FAQ extends React.Component {
	render() {
    
		return <div className="page main wrapper">
          <div className="title-wrapper">
            <h1>The Team</h1>
          </div>
					<article className="guide row">
				</article>
			</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
	}
};

export default FAQ;
