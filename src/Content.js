import React, {Component} from 'react';
import './Content.css';
import Newtwit from './Newtwit'
import Oldtwits from './Oldtwits'
import axios from 'axios'

class Content extends Component {
	// Data
	state = {
		messages:[]
	}
	// Functions
	//Functions to take the messages from the database and insert them in the state
	componentWillMount() {
		axios.get('http://localhost:4000/api/messages').then( (res) =>{
			this.setState({
				messages: res.data
			})
		}).catch( (err) => {
			console.log('err', err);
		})
	}

	//Function to create a message (to be passed to newtwit)
	createMessage = (e , text) => {
		e.preventDefault()
		let message = {
			body : text,
			author:'',
			hashtag:'' 
		}
		axios.post(
			'http://localhost:4000/api/messages',
			message,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then( (res) => {
			console.log(message)
			console.log(res.data);
			let messages = this.state.messages
			messages.push(res.data)
			this.setState({messages})
		}).catch( (err) => {
			console.log('err', err);
		})
	}


	// Render
	render() {
		return (
			<div id="content" className="col-6">
				<div className="row no-gutters d-flex flex-column">
					<Newtwit createMessage={this.createMessage}/>
					<Oldtwits />
				</div>
			</div>
		)
	}
}

export default Content;
