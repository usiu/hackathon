import React from "react";
import Router from "react-router";
var { Link } = Router;

class ProfileDetail extends React.Component {
	render() {
		return <div>
      <h1 className="">{this.props.model.get('name')}</h1>
      <div className="links">
        <a href=""></a>
      </div>
      <p className="description"></p>
    </div>
	};
}

export default ProfileDetail;
