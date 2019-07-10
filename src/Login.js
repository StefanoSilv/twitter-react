import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
	// Data
	state = {
		email:'',
		password:''
	}
	// Functions
	//Same functions which are in the signup components to change the value field
	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	// Render
	render() {
		return (
			<form>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}
					class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
					<small id="emailHelp" class="form-text text-muted">Enter a valid Email address</small>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" value={this.state.password} onChange={(e) => this.changePassword(e)}
					class="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div class="form-group form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Show password</label>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default Login;
