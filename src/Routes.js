import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Signup from './Signup'
import App from './App'
import Login from './Login'

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={() => <Login />} />
					<Route path="/signup" component={() => <Signup />} />
					<Route path="/" render={() => <App />} />
				</Switch>
			</BrowserRouter>
		)
	}
}




export default Routes;
