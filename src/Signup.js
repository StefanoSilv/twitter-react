import React, {Component} from 'react';
import './Signup.css';
import axios from 'axios'

class Signup extends Component {
	// Data
	state = {
		name:'',
		email:'',
		password:''
	}
	// Functions

	//Functions which allow us to change the value inside the value attribute
	// and set it equal to what the user type in the bar
	//They will go in an onChange eventListener in the input tag
	changeName = (e) => {
		this.setState({name: e.target.value})
	}

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	//Function which prevent the default after submitting and which
	//allow to save the data in the database
	signup = (e) => {
		e.preventDefault()
		axios.post('http://localhost:4000/api/signup', this.state).then( (res) =>{
			localStorage.setItem('token', res.data.token)
		}).catch( (err) => {
			console.log('err', err)
		})

	}

	//Function to make the password visible
	// showPassword() {
	//   var x = document.getElementById("exampleInputPassword1");
	//   if (x.type = "password") {
	//     x.type = "text";
	//   } else {
	//     x.type = "password";
	//   }
	// }

	// Render
	render() {
		return (
			<form onSubmit={ (e) => this.signup(e)} >
				<div className="form-group">
					<label for="exampleInputEmail1">Nickname</label>
					<input type="text" value={this.state.name} onChange={(e) => this.changeName(e)}
					className="form-control" id="exampleInputEmail1" placeholder="Enter nickname..." />
				</div>
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}
					className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
					<small id="emailHelp" className="form-text text-muted">Enter a valid Email address</small>
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" value={this.state.password} onChange={(e) => this.changePassword(e)}
					className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-group form-check">
					<input type="checkbox" onclick={ () => this.showPassword()} className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" for="exampleCheck1">Show password</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default Signup;
