import React from "react";
import Router from "react-router";
var { Link } = Router;

class ProfileDetail extends React.Component {
	render() {
		return <div>
			<img src={this.props.model.get('profile_url')} className="avatar lf" />
      <h1 className="">{this.props.model.get('name')}</h1>
      <p className="description"></p>
    </div>
	};
}

export default ProfileDetail;
