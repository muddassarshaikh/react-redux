import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registration } from '../../actions/user';

class Registration extends Component {
	state = {
		showMessage: null
	};

	onSubmit(values) {
		this.props.registration(values);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		const stateObj = prevState;
		if (nextProps.registrationInfo) {
			stateObj.showMessage = nextProps.registrationInfo.message;
		}
		return prevState === stateObj ? null : stateObj;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
					<div>
						<label>First Name</label>
						<div>
							<Field name="firstName" component="input" type="text" placeholder="First Name" />
						</div>
					</div>
					<div>
						<label>Last Name</label>
						<div>
							<Field name="lastName" component="input" type="text" placeholder="Last Name" />
						</div>
					</div>
					<div>
						<label>Email</label>
						<div>
							<Field name="email" component="input" type="email" placeholder="Email" />
						</div>
					</div>
					<div>
						<label>Sex</label>
						<div>
							<label>
								<Field name="sex" component="input" type="radio" value="male" /> Male
							</label>
							<label>
								<Field name="sex" component="input" type="radio" value="female" /> Female
							</label>
						</div>
					</div>
					<div>
						<label>Favorite Color</label>
						<div>
							<Field name="favoriteColor" component="select">
								<option />
								<option value="ff0000">Red</option>
								<option value="00ff00">Green</option>
								<option value="0000ff">Blue</option>
							</Field>
						</div>
					</div>
					<div>
						<label htmlFor="employed">Employed</label>
						<div>
							<Field name="employed" id="employed" component="input" type="checkbox" />
						</div>
					</div>
					<div>
						<label>Notes</label>
						<div>
							<Field name="notes" component="textarea" />
						</div>
					</div>
					<div>
						<button type="submit">Submit</button>
						<button type="button">Clear Values</button>
					</div>
				</form>
				{this.state.showMessage}
			</div>
		);
	}
}

Registration = reduxForm({
	form: 'RegistrationForm'
})(Registration);

Registration = connect(
	(state) => ({
		registrationInfo: state.user.registrationDetails
	}),
	{ registration }
)(Registration);

export default Registration;
