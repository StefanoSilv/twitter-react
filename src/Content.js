import React, {Component} from 'react';
import './Content.css';
import Newtwit from './Newtwit'
import Oldtwits from './Oldtwits'

class Content extends Component {
	// Data
	state = {
		messages:[]
	}
	// Functions
	//Functions to take the messages from the database and insert them in the state
	componentWillMount() {
		// axios.get('http://localhost:4000/api/messages').then( (res) =>{
		// 	setState(
		//
		// 	)
		// }).catch( (err) => {
		//
		// })
	}


	// Render
	render() {
		return (
			<div id="content" className="col-6">
				<div className="row no-gutters d-flex flex-column">
					<Newtwit />
					<Oldtwits />
				</div>
			</div>
		)
	}
}

export default Content;
