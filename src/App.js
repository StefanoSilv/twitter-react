import React, {Component} from 'react';
import './App.css';
import Sidebar1 from './Sidebar1'
import Sidebar2 from './Sidebar2'
import Topbar from './Topbar'
import Content from './Content'
import axios from 'axios'


class App extends Component {
	// Data
	state = {
		hashtag: ''
	}
	// Functions

	componentWillMount(){
		axios.get(`${process.env.REACT_APP_API}/api/hashtags`).then( (res) =>{
			this.setState({
				hashtag:res.data[0]._id //The default hashtag
			})
		})
	}

	getMessages = (id) => {
		this.setState({
			hashtag: id
		})
	}


	// Render
	render() {
		return (
			<div id="wrap">
				<Topbar />
				<div className="container-fluid">
					<div className="row no-gutters">
						<Sidebar1 getMessages={this.getMessages}/>
						<Content hashtag={this.state.hashtag} />
						<Sidebar2 />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
