import React, {Component} from 'react';
import './App.css';
import Sidebar1 from './Sidebar1'
import Sidebar2 from './Sidebar2'
import Topbar from './Topbar'
import Content from './Content'


class App extends Component {
	// Data
	state = {
		hashtag: '5d292eb736a05e4aabb8dd54' //The default hashtag
	}
	// Functions

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
