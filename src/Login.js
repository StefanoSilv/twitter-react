import React, {Component} from 'react';
import './Login.css';
import axios from 'axios'

class Login extends Component {
	// Data
	state = {
		email:'',
		password:'',
		error:''
	}
	// Functions
	//Same functions which are in the signup components to change the value field
	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	login = (e) => {
		e.preventDefault()
		axios.post('http://localhost:4000/api/login', this.state).then( (res) => {
			if(!res.data.token){
				this.setState({
					error: res.data
			})}else{
				this.setState({
					error: ''
				})
			}
			localStorage.setItem('token', res.data.token)
			this.props.auth()
		}).catch( (err) => {
			console.log('err', err)
		})
	}

	// Render
	render() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}
					className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
					<small id="emailHelp" className="form-text text-muted">Enter a valid Email address</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" value={this.state.password} onChange={(e) => this.changePassword(e)}
					className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default Login;
