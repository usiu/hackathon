import React from "react";
import Router from "react-router";
var { Link } = Router;

class ProfileForm extends React.Component {
	constructor(props) {
		super(props);
		var data = {
			gender: this.props.model.get('gender'),
			verification: this.props.model.get('verification'),
			primary_email: this.props.model.get('primary_email'),
			name: this.props.model.get('name'),
			phone_number: this.props.model.get('phone_number'),
			university: this.props.model.get('university'),
			hacking_what: this.props.model.get('hacking_what'),
			favourite_os: this.props.model.get('favourite_os'),
			age: this.props.model.get('age')
		};

		if(this.props.isModifying) {
			data = {
        gender: this.props.model.get('gender'),
        primary_email: this.props.model.get('primary_email'),
        name: this.props.model.get('name'),
        phone_number: this.props.model.get('phone_number'),
        university: this.props.model.get('university'),
        hacking_what: this.props.model.get('hacking_what'),
        favourite_os: this.props.model.get('favourite_os'),
        age: this.props.model.get('age')
			};

		}
		this.state = data;
	}


	render() {
		return <div>
			<div className="title-wrapper">
				<h1>Edit Profile</h1>
			</div>
			<form onSubmit={this.props.onSubmit} className="lf">
				<ul>
					<li>
						<label>Name</label>
						<input ref="name" className="name" defaultValue={this.state.name} />
					</li>
					<li>
						<ul>
							<li className="short">
								<label>Gender</label>
								<select ref="gender" defaultValue={this.state.gender}>
									<option value="">-- Select Gender --</option>
									<option value="female">Female</option>
									<option value="male">Male</option>
								</select>
							</li>
							<li className="short">
								<label>Age</label>
								<input ref="age" className="age" defaultValue={this.state.age} />
							</li>
						</ul>
					</li>
					<li className="">
						<label>Phone</label>
						<input ref="phone_number" className="phone_number" defaultValue={this.state.phone_number} />
					</li>
					<li>
						<ul>
							<li>
								<label>University</label>
								<select ref="university" defaultValue={this.state.university}>
									<option value="">-- Select One --</option>
									<option value="usiu">USIU-Africa</option>
									<option value="uon">University of Nairobi</option>
									<option value="ku">Kenyatta University</option>
									<option value="strathmore">Strathmore University</option>
									<option value="jkuat">JKUAT</option>
									<option value="daystar">Daystar University</option>
									<option value="riara">Riara University</option>
									<option value="stpaul">St. Paul&rsquo;s University</option>
									<option value="kca">KCA University</option>
									<option value="cuea">Catholic University of East Africa</option>
									<option value="anu">Africa Nazarene University</option>
									<option value="mmu">Multimedia University</option>
								</select>
							</li>
							<li className="short">
								<label>What will you be hacking?</label>
								<select ref="hacking_what" defaultValue={this.state.hacking_what}>
									<option value="">-- Select Option --</option>
									<option value="hw">Hardware</option>
									<option value="sw">Software</option>
								</select>
							</li>
						</ul>
					</li>
					<li className="short">
						<label>Favoured OS</label>
						<select ref="favourite_os" defaultValue={this.state.favourite_os}>
							<option value="">-- Select One --</option>
							<option value="Windows">Windows</option>
							<option value="Linux">Linux</option>
							<option value="OSX">OSX</option>
						</select>
					</li>
				</ul>
				<br />
				<button type="submit" className="button green">Update Profile</button>
			</form>
    </div>
	};
}

export default ProfileForm;
