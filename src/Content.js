import React, {Component} from 'react';
import './Content.css';
import Newtwit from './Newtwit'
import Oldtwits from './Oldtwits'
import axios from 'axios'


class Content extends Component {
	// Data
	state = {
		messages:[],
		users:[]
	}
	// Functions
	//Functions to take the messages from the database and insert them in the state
	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API}/api/messages`).then( (res) =>{

			this.setState({
				messages: res.data
			})
		}).catch( (err) => {
			console.log('err', err);
		})
		//Set the date of the message

	}


	//Function to select the data by the hashtag
	componentWillReceiveProps(props) {
		axios.get(`${process.env.REACT_APP_API}/api/messages?hashtag=${props.hashtag}`).then((res) => {
			this.setState({
				messages: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	//Function to create a message (to be passed to newtwit)
	createMessage = (e , text) => {
		let message = {
			body : text,
			hashtag: this.props.hashtag //It's the id coming from App - Sidebar -Hashtag
		}
		axios.post(
			`${process.env.REACT_APP_API}/api/messages`,
			message,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then( (res) => {
			let messages = this.state.messages
			messages.push(res.data)
			console.log(messages);
			this.setState({messages})
		}).catch( (err) => {
			console.log('err', err);
		})
			// e.preventDefault();
	}


	// Render
	render() {
		return (
			<div id="content" className="col-6">
				<div className="row d-flex ">
					<Newtwit createMessage={this.createMessage}/>
					{
						this.state.messages.map((m) => {
							return <Oldtwits message={m} key={m._id} />
						})
					}
				</div>
			</div>
		)
	}
}

export default Content;
