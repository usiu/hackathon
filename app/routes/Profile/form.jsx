import React from "react";
import Router from "react-router";
var { Link } = Router;

class ProfileForm extends React.Component {
	constructor(props) {
		super(props);

		if(this.props.isModifying) {
			data = {
			};
		}

		this.state = data;

	}
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

export default ProfileForm;
