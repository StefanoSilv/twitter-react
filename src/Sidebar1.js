import React, {Component} from 'react';
import './Sidebar1.css';
import Hashtag from './Hashtag'
import axios from 'axios'

class Sidebar1 extends Component {
	// Data
	state = {
		hashtags:[]

	}
	// Functions
	//Function to get data from the database and set it in the state
	componentWillMount() {
		axios.get('http://localhost:4000/api/hashtags').then( (res) => {
			this.setState({
				hashtags: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	//Function to select the hashtag
	// selectHashtag = (id) =>{
	// 	let hashtags = this.state.hashtags
	// 	let hashtag = hashtags.find( (h) => h._id === id)
	// 	this.setState({hashtags})
	// }

	// Render
	render() {
		return (
			<div id="sidebar1" className="col-3">
				<h3>#Hashtags</h3>
				<ul className= "list-unstyled">
				{
					this.state.hashtags.map((h) => {
						return <Hashtag hashtag={h} key={h._id} selectHashtag={this.selectHashtag} />
					})
				}
				</ul>
			</div>
		)
	}
}

export default Sidebar1;
